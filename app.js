// ── STATE ──
let currentWorkout = null;
let warmupIndex = 0;
let timerState = null;
let timerInterval = null;
let audioCtx = null;
let wakeLock = null;
let autoStartTimeout = null;
let lastTimerExKey = null; // tracks displayed exercise to avoid GIF reload

// ── THUMBNAILS ──
function getInitials(name) {
  return name.split(/[\s\-·&()/]+/).filter(w => /^[a-zA-Z0-9]/.test(w)).map(w => w[0]).join('').toUpperCase().slice(0, 3);
}

function getImageSrc(name) {
  const file = IMAGE_MAP[name];
  if (!file || !currentWorkout) return null;
  return currentWorkout.id + '/' + encodeURIComponent(file);
}

const TUTORIAL_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>';

function thumbHTML(tutorialUrl, name) {
  const src = getImageSrc(name);
  const inner = src
    ? '<img src="' + src + '" alt="' + name.replace(/"/g, '&quot;') + '" loading="lazy">'
    : '<div class="thumb-placeholder">' + getInitials(name) + '</div>';

  return '<div class="thumb-wrap">' + inner + '</div>';
}

function tutorialBtnHTML(tutorialUrl) {
  if (!tutorialUrl) return '';
  return '<a href="' + tutorialUrl + '" target="_blank" rel="noopener" class="tutorial-btn">' + TUTORIAL_SVG + ' Watch tutorial</a>';
}

// ── AUDIO ──
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function beep(freq, duration, count, gap) {
  const ctx = getAudioCtx();
  if (ctx.state === 'suspended') ctx.resume();
  for (let i = 0; i < count; i++) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = freq;
    osc.type = 'square';
    gain.gain.value = 0.15;
    const start = ctx.currentTime + i * (duration + gap) / 1000;
    osc.start(start);
    gain.gain.setValueAtTime(0.15, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration / 1000);
    osc.stop(start + duration / 1000);
  }
}

function beepCountdown() { beep(880, 100, 3, 150); }
function beepWorkStart() { beep(660, 350, 1, 0); }
function beepTransition() { beep(550, 150, 2, 200); }
function beepRoundRest() { beep(440, 400, 3, 250); }

// ── WAKE LOCK ──
let wakeLockActive = false;

async function requestWakeLock() {
  wakeLockActive = true;
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    }
  } catch (e) {}
}

function releaseWakeLock() {
  wakeLockActive = false;
  if (wakeLock) { wakeLock.release(); wakeLock = null; }
}

// Re-acquire wake lock when returning to the app (iOS releases it on tab switch / lock screen)
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && wakeLockActive && !wakeLock) {
    requestWakeLock();
  }
});

// ── NAVIGATION ──
function navigateTo(screen) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(s => {
    s.classList.remove('active');
    s.classList.remove('exit-left');
  });
  document.getElementById('screen-' + screen).classList.add('active');
  if (screen === 'home') {
    stopTimer();
    releaseWakeLock();
  }
}

function confirmExit() {
  if (timerState && timerState.running) {
    pauseTimer();
  }
  if (confirm('End workout and return home?')) {
    navigateTo('home');
  }
}

// ── HOME SCREEN ──
function renderHome() {
  const container = document.getElementById('day-cards');
  container.innerHTML = WORKOUTS.map(w => `
    <div class="day-card" onclick="selectDay('${w.id}')">
      <div class="day-card-top">
        <span class="day-card-day">${w.day}</span>
        <span class="day-card-badge">4Q</span>
      </div>
      <div class="day-card-muscles">${w.muscles}</div>
      <div class="day-card-meta">4 rounds · 5 exercises · ~35 min</div>
    </div>
  `).join('');
}

function selectDay(id) {
  currentWorkout = WORKOUTS.find(w => w.id === id);
  warmupIndex = 0;
  renderWarmup();
  navigateTo('warmup');
  requestWakeLock();
}

// ── WARM-UP SCREEN ──
function renderWarmup() {
  const w = currentWorkout;
  const ex = w.warmup[warmupIndex];
  document.getElementById('warmup-day-label').textContent = w.day + ' — Warm-up';
  document.getElementById('warmup-counter').textContent = (warmupIndex + 1) + ' / ' + w.warmup.length;
  document.getElementById('warmup-phase-label').textContent = ex.phase;
  document.getElementById('warmup-name').textContent = ex.name;
  document.getElementById('warmup-desc').textContent = ex.desc;
  document.getElementById('warmup-duration').textContent = ex.duration;
  document.getElementById('warmup-thumb').innerHTML = thumbHTML(ex.tutorial, ex.name);
  document.getElementById('warmup-tutorial').innerHTML = tutorialBtnHTML(ex.tutorial);

  const prevBtn = document.getElementById('warmup-prev-btn');
  prevBtn.style.visibility = warmupIndex === 0 ? 'hidden' : 'visible';

  const nextBtn = document.getElementById('warmup-next-btn');
  if (warmupIndex === w.warmup.length - 1) {
    nextBtn.textContent = 'Start Workout';
    nextBtn.classList.add('start-workout');
    nextBtn.classList.remove('primary');
  } else {
    nextBtn.textContent = 'Next';
    nextBtn.classList.remove('start-workout');
    nextBtn.classList.add('primary');
  }
}

function warmupNext() {
  if (warmupIndex < currentWorkout.warmup.length - 1) {
    warmupIndex++;
    renderWarmup();
  } else {
    startWorkoutTimer();
  }
}

function warmupPrev() {
  if (warmupIndex > 0) {
    warmupIndex--;
    renderWarmup();
  }
}

// ── TIMER ──
function computeTotalTime() {
  const roundTime = EXERCISES_PER_ROUND * WORK_TIME + (EXERCISES_PER_ROUND - 1) * TRANSITION_TIME;
  return TOTAL_ROUNDS * roundTime + (TOTAL_ROUNDS - 1) * ROUND_REST_TIME;
}

function computeElapsed(state) {
  let elapsed = 0;
  for (let r = 0; r < state.round; r++) {
    elapsed += EXERCISES_PER_ROUND * WORK_TIME + (EXERCISES_PER_ROUND - 1) * TRANSITION_TIME;
    if (r < TOTAL_ROUNDS - 1) elapsed += ROUND_REST_TIME;
  }

  if (state.phase === 'roundRest') {
    elapsed += EXERCISES_PER_ROUND * WORK_TIME + (EXERCISES_PER_ROUND - 1) * TRANSITION_TIME;
    elapsed += ROUND_REST_TIME - state.time;
  } else {
    for (let e = 0; e < state.exercise; e++) {
      elapsed += WORK_TIME;
      if (e < EXERCISES_PER_ROUND - 1) elapsed += TRANSITION_TIME;
    }
    if (state.phase === 'work') {
      elapsed += WORK_TIME - state.time;
    } else if (state.phase === 'transition') {
      elapsed += WORK_TIME;
      elapsed += TRANSITION_TIME - state.time;
    }
  }
  return elapsed;
}

function startWorkoutTimer() {
  lastTimerExKey = null;
  timerState = {
    round: 0,
    exercise: 0,
    phase: 'work',
    time: WORK_TIME,
    running: false,
    finished: false,
  };
  navigateTo('timer');
  renderTimer();
  requestWakeLock();
  autoStartTimeout = setTimeout(() => {
    autoStartTimeout = null;
    startTimer();
  }, 500);
}

function renderTimer() {
  const s = timerState;
  const workout = currentWorkout;
  const round = workout.rounds[s.round];
  const color = ROUND_COLORS[s.round];

  // Round label
  document.getElementById('timer-round-label').textContent =
    'Round ' + (s.round + 1) + ' of 4 — ' + round.label;
  document.getElementById('timer-round-label').style.color = color;

  // Effort
  document.getElementById('timer-effort').textContent = round.effort + ' effort';

  // Progress bar
  const total = computeTotalTime();
  const elapsed = computeElapsed(s);
  const pct = Math.min((elapsed / total) * 100, 100);
  const fill = document.getElementById('timer-progress-fill');
  fill.style.width = pct + '%';
  fill.style.background = color;

  // State label
  const stateEl = document.getElementById('timer-state-label');
  if (s.phase === 'work') {
    stateEl.textContent = 'WORK';
    stateEl.style.color = color;
  } else if (s.phase === 'transition') {
    stateEl.textContent = 'REST';
    stateEl.style.color = '#8888a0';
  } else {
    stateEl.textContent = 'ROUND REST';
    stateEl.style.color = '#8888a0';
  }

  // Countdown
  const countEl = document.getElementById('timer-countdown');
  countEl.textContent = s.time;
  countEl.classList.toggle('warning', s.phase === 'work' && s.time <= 3);

  // Exercise name & details
  const nameEl = document.getElementById('timer-exercise-name');
  const cueEl = document.getElementById('timer-exercise-cue');
  const badgeEl = document.getElementById('timer-type-badge');

  // Determine which exercise to display
  let displayEx = null;
  let exKey = '';

  if (s.phase === 'roundRest') {
    nameEl.textContent = 'Rest';
    cueEl.textContent = 'Breathe and recover';
    badgeEl.className = 'type-badge';
    badgeEl.textContent = '';
    badgeEl.style.display = 'none';
    const nr = workout.rounds[s.round + 1];
    if (nr) { displayEx = nr.exercises[0]; }
    exKey = 'rest-' + s.round;
  } else if (s.phase === 'transition') {
    const nextEx = round.exercises[s.exercise + 1];
    nameEl.textContent = nextEx.name;
    cueEl.textContent = nextEx.cue;
    badgeEl.style.display = '';
    badgeEl.className = 'type-badge ' + nextEx.type;
    badgeEl.textContent = nextEx.type === 'plate' ? '25lb Plate' : 'Bodyweight';
    displayEx = nextEx;
    exKey = s.round + '-' + (s.exercise + 1);
  } else {
    const ex = round.exercises[s.exercise];
    nameEl.textContent = ex.name;
    cueEl.textContent = ex.cue;
    badgeEl.style.display = '';
    badgeEl.className = 'type-badge ' + ex.type;
    badgeEl.textContent = ex.type === 'plate' ? '25lb Plate' : 'Bodyweight';
    displayEx = ex;
    exKey = s.round + '-' + s.exercise;
  }

  // Only rebuild thumbnail when exercise changes (prevents GIF restart on every tick)
  if (exKey !== lastTimerExKey) {
    lastTimerExKey = exKey;
    const thumbArea = document.getElementById('timer-thumb-area');
    if (displayEx) {
      thumbArea.innerHTML = thumbHTML(displayEx.tutorial, displayEx.name) + tutorialBtnHTML(displayEx.tutorial);
    } else {
      thumbArea.innerHTML = '';
    }
  }

  // Dots
  const dotsEl = document.getElementById('timer-dots');
  dotsEl.innerHTML = '';
  for (let i = 0; i < EXERCISES_PER_ROUND; i++) {
    const dot = document.createElement('div');
    dot.className = 'timer-dot';
    if (i < s.exercise) dot.classList.add('filled');
    if (i === s.exercise && s.phase !== 'roundRest') {
      dot.classList.add('active');
      dot.style.background = color;
    }
    if (s.phase === 'roundRest') {
      dot.classList.add('filled');
    }
    dotsEl.appendChild(dot);
  }

  // Next exercise
  const nextEl = document.getElementById('timer-next-exercise');
  if (s.phase === 'roundRest') {
    const nextRound = workout.rounds[s.round + 1];
    if (nextRound) {
      nextEl.textContent = 'Next round: ' + nextRound.label + ' — ' + nextRound.exercises[0].name;
    }
  } else if (s.phase === 'transition') {
    const ni = s.exercise + 1;
    if (ni < EXERCISES_PER_ROUND - 1) {
      nextEl.textContent = 'Then: ' + round.exercises[ni + 1].name;
    } else {
      nextEl.textContent = 'Last exercise this round';
    }
  } else if (s.phase === 'work') {
    if (s.exercise < EXERCISES_PER_ROUND - 1) {
      nextEl.textContent = 'Up next: ' + round.exercises[s.exercise + 1].name;
    } else if (s.round < TOTAL_ROUNDS - 1) {
      nextEl.textContent = 'Round rest coming up';
    } else {
      nextEl.textContent = 'Last exercise!';
    }
  }

  // Play/pause icons
  document.getElementById('icon-play').style.display = s.running ? 'none' : '';
  document.getElementById('icon-pause').style.display = s.running ? '' : 'none';
}

function startTimer() {
  if (timerState.finished) return;
  timerState.running = true;
  beepWorkStart();
  renderTimer();
  timerInterval = setInterval(tick, 1000);
}

function pauseTimer() {
  timerState.running = false;
  clearInterval(timerInterval);
  timerInterval = null;
  if (autoStartTimeout) { clearTimeout(autoStartTimeout); autoStartTimeout = null; }
  renderTimer();
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
  timerState = null;
}

function timerToggle() {
  if (!timerState) return;
  if (timerState.running) pauseTimer();
  else startTimer();
}

function tick() {
  const s = timerState;
  if (!s || !s.running) return;

  s.time--;

  // Countdown beeps at 3 seconds remaining during work
  if (s.phase === 'work' && s.time === 3) {
    beepCountdown();
  }

  if (s.time <= 0) {
    advancePhase();
  }
  renderTimer();
}

function advancePhase() {
  const s = timerState;

  if (s.phase === 'work') {
    if (s.exercise < EXERCISES_PER_ROUND - 1) {
      s.phase = 'transition';
      s.time = TRANSITION_TIME;
      beepTransition();
    } else if (s.round < TOTAL_ROUNDS - 1) {
      s.phase = 'roundRest';
      s.time = ROUND_REST_TIME;
      beepRoundRest();
    } else {
      finishWorkout();
      return;
    }
  } else if (s.phase === 'transition') {
    s.exercise++;
    s.phase = 'work';
    s.time = WORK_TIME;
    beepWorkStart();
  } else if (s.phase === 'roundRest') {
    s.round++;
    s.exercise = 0;
    s.phase = 'work';
    s.time = WORK_TIME;
    beepWorkStart();
  }
}

function timerSkip() {
  if (!timerState || timerState.finished) return;
  const wasRunning = timerState.running;
  if (wasRunning) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  advancePhase();
  renderTimer();
  if (wasRunning && !timerState.finished) {
    timerInterval = setInterval(tick, 1000);
  }
}

function timerPrev() {
  if (!timerState) return;
  const s = timerState;
  const wasRunning = s.running;
  if (wasRunning) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (s.phase === 'transition') {
    s.phase = 'work';
    s.time = WORK_TIME;
  } else if (s.phase === 'roundRest') {
    s.exercise = EXERCISES_PER_ROUND - 1;
    s.phase = 'work';
    s.time = WORK_TIME;
  } else if (s.phase === 'work') {
    if (s.exercise > 0) {
      s.exercise--;
      s.time = WORK_TIME;
    } else if (s.round > 0) {
      s.round--;
      s.exercise = EXERCISES_PER_ROUND - 1;
      s.time = WORK_TIME;
    } else {
      s.time = WORK_TIME;
    }
  }

  renderTimer();
  if (wasRunning) {
    timerInterval = setInterval(tick, 1000);
  }
}

function finishWorkout() {
  timerState.finished = true;
  timerState.running = false;
  clearInterval(timerInterval);
  timerInterval = null;
  releaseWakeLock();
  beep(660, 200, 5, 150);
  renderCooldown();
  setTimeout(() => navigateTo('cooldown'), 800);
}

// ── COOL-DOWN ──
function renderCooldown() {
  const list = document.getElementById('cooldown-list');
  list.innerHTML = currentWorkout.cooldown.map(c => `
    <div class="cooldown-card">
      <div class="cooldown-card-name">${c.name}</div>
      <div class="cooldown-card-desc">${c.desc}</div>
      <div class="cooldown-card-dur">${c.duration}</div>
    </div>
  `).join('');
}

// ── INIT ──
renderHome();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}
