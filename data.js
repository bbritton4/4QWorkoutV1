const MONDAY_WARMUP = [
  { name: 'Arm Circles', desc: 'Big slow circles forward and back, loosen shoulder capsule', duration: '30s each direction', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=PaR6Z7D5fl4' },
  { name: 'Cross-body Arm Swings', desc: 'Swing both arms across chest, increasing range each rep', duration: '30s', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=PaR6Z7D5fl4' },
  { name: 'Shoulder Roll & Shrug', desc: 'Shrug up, roll back, depress — wake up traps and rotator cuff', duration: '20 reps', phase: 'Dynamic' },
  { name: 'Inchworm', desc: 'Walk hands out to plank, walk feet to hands — prime thoracic spine', duration: '6 reps', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
  { name: "World's Greatest Stretch", desc: 'Lunge forward, rotate elbow to ground, reach to sky — full upper chain', duration: '5 each side', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
  { name: 'Band Pull-apart (Plate Sub)', desc: 'Hold plate with both hands, arms straight, pull wide — activate rear delts', duration: '15 reps', phase: 'Activation' },
  { name: 'Push-up Negative', desc: '3-second lowering only, no push — fire chest & tricep neuromuscular system', duration: '5 reps', phase: 'Activation', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
  { name: 'Scapular Push-up', desc: 'In plank, protract and retract shoulder blades only — stabilize the joint', duration: '10 reps', phase: 'Activation', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
];

const TUESDAY_WARMUP = [
  { name: 'Leg Swing (Front to Back)', desc: 'Hold a wall, swing leg through full range — open hip flexors', duration: '15 each leg', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
  { name: 'Leg Swing (Side to Side)', desc: 'Same wall hold, lateral swing — abductor and adductor mobility', duration: '15 each leg', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
  { name: 'Hip Circle', desc: 'Hands on hips, slow controlled circles — lubricate hip joint', duration: '10 each direction', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
  { name: 'Bodyweight Squat (Slow)', desc: '3 sec down, pause at bottom, 1 sec up — prime the pattern', duration: '10 reps', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
  { name: 'Walking Knee Hug', desc: 'Step, pull knee to chest, step — glute and hip flexor activation', duration: '10 each leg', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
  { name: 'Ankle Circle', desc: 'Seated or standing, slow controlled circles — calf and ankle prep', duration: '10 each direction', phase: 'Dynamic' },
  { name: 'Glute Bridge Hold', desc: 'Bridge up, squeeze glutes hard at top, hold — fire the posterior chain', duration: '3×10s holds', phase: 'Activation', tutorial: 'https://www.youtube.com/watch?v=8bbE64NuDTU' },
  { name: 'Lateral Squat Walk', desc: 'Half squat, step side to side — abductor and glute med activation', duration: '10 steps each way', phase: 'Activation', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
  { name: 'Single-leg Calf Raise', desc: 'Slow and controlled, full range — prime Achilles and calf', duration: '10 each leg', phase: 'Activation', tutorial: 'https://www.youtube.com/watch?v=gwLzBJYoWlI' },
];

const WEDNESDAY_WARMUP = [
  { name: 'Cat-Cow', desc: 'On all fours, arch and round spine in full range — mobilize entire back', duration: '10 slow reps', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=4XLEnwUr1d8' },
  { name: 'Thoracic Rotation', desc: 'Seated or kneeling, hands behind head, rotate upper spine each side', duration: '10 each side', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=4XLEnwUr1d8' },
  { name: 'Child\'s Pose Reach', desc: 'Sit back to heels, reach arms long — lengthen lats and decompress lower back', duration: '30s', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=4XLEnwUr1d8' },
  { name: 'Hip Hinge with Arms', desc: 'Hinge at hips, flat back, reach arms forward and back — prime deadlift pattern', duration: '10 reps', phase: 'Dynamic' },
  { name: 'Thread the Needle', desc: 'On all fours, thread one arm under body — thoracic rotation and lat stretch', duration: '8 each side', phase: 'Dynamic', tutorial: 'https://www.youtube.com/watch?v=4XLEnwUr1d8' },
  { name: 'Dead Bug (Slow)', desc: 'Lower opposite arm/leg to just above floor, press low back flat', duration: '8 each side', phase: 'Activation', tutorial: 'https://www.youtube.com/watch?v=4XLEnwUr1d8' },
  { name: 'Bird Dog Hold', desc: 'Extend arm and opposite leg, hold 3 sec at parallel', duration: '8 each side', phase: 'Activation', tutorial: 'https://www.youtube.com/watch?v=4XLEnwUr1d8' },
  { name: 'Plank 10-sec Hold', desc: 'Tight core, squeeze glutes, breathe', duration: '3 holds', phase: 'Activation', tutorial: 'https://www.youtube.com/watch?v=PaR6Z7D5fl4' },
];

const MONDAY_COOLDOWN = [
  { name: 'Doorway Chest Stretch', desc: 'Arm at 90°, press forearm into doorframe, rotate chest away', duration: '30s each side' },
  { name: 'Overhead Tricep Stretch', desc: 'Reach arm behind head, use other hand to gently press elbow down', duration: '30s each side' },
  { name: 'Cross-body Shoulder Stretch', desc: 'Pull arm across chest at shoulder height, hold', duration: '30s each side' },
];

const TUESDAY_COOLDOWN = [
  { name: 'Standing Quad Stretch', desc: 'Pull foot to glute, keep knees together', duration: '30s each side' },
  { name: 'Couch Stretch', desc: 'Rear knee on floor, foot up on wall or chair — deep hip flexor', duration: '45s each side' },
  { name: 'Standing Hamstring Stretch', desc: 'Foot on chair, hinge forward, flat back', duration: '30s each side' },
  { name: 'Calf Stretch (Wall)', desc: 'Heel on floor, lean into wall', duration: '30s each leg' },
];

const WEDNESDAY_COOLDOWN = [
  { name: 'Seated Spinal Twist', desc: 'Cross one leg, use elbow to rotate toward knee, look over shoulder', duration: '30s each side' },
  { name: 'Lat Stretch (Overhead)', desc: 'Hold a doorframe or pole, shift hips away', duration: '30s each side' },
  { name: 'Knees-to-Chest', desc: 'On back, pull both knees to chest, rock gently side to side', duration: '30s' },
  { name: 'Pigeon Pose', desc: 'Front leg bent at 90°, rear leg extended — deep glute and lower back release', duration: '40s each side' },
];

const WORKOUTS = [
  {
    id: 'monday',
    day: 'Monday',
    muscles: 'Chest · Triceps · Biceps · Shoulders',
    warmup: MONDAY_WARMUP,
    rounds: [
      {
        label: 'Build', effort: '70%', exercises: [
          { name: 'Push-up', type: 'bodyweight', cue: 'Controlled tempo, full range', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
          { name: 'Plate Overhead Press', type: 'plate', cue: 'Standing, press plate overhead', tutorial: 'https://www.youtube.com/watch?v=BG9ojmx9RyI' },
          { name: 'Plate Curl', type: 'plate', cue: 'Both hands on plate edges', tutorial: 'https://www.youtube.com/watch?v=i1AkTNCulKQ' },
          { name: 'Tricep Dip', type: 'bodyweight', cue: 'Use a chair or floor dip', tutorial: 'https://www.youtube.com/watch?v=T1L4smOP0L8' },
          { name: 'Lateral Raise (Plate)', type: 'plate', cue: 'Hinge slightly forward', tutorial: 'https://www.youtube.com/watch?v=PHS4NuiJeAE' },
        ]
      },
      {
        label: 'Load', effort: '80%', exercises: [
          { name: 'Wide Push-up', type: 'bodyweight', cue: 'Wider than shoulder-width', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
          { name: 'Plate Front Raise', type: 'plate', cue: 'Arms straight, raise to eye level', tutorial: 'https://www.youtube.com/watch?v=e8my9OOCXVo' },
          { name: 'Hammer Curl (Plate)', type: 'plate', cue: 'Neutral grip on plate edge', tutorial: 'https://www.youtube.com/watch?v=WiDk95-x4ko' },
          { name: 'Diamond Push-up', type: 'bodyweight', cue: 'Hands together, targets triceps', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
          { name: 'Plate Upright Row', type: 'plate', cue: 'Pull plate to chin, elbows high', tutorial: 'https://www.youtube.com/watch?v=_SjeA5AquOs' },
        ]
      },
      {
        label: 'Push', effort: '90%', exercises: [
          { name: 'Decline Push-up', type: 'bodyweight', cue: 'Feet elevated on chair', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
          { name: 'Plate Arnold Press', type: 'plate', cue: 'Rotate palms as you press', tutorial: 'https://www.youtube.com/watch?v=MPSD9QkFYPw' },
          { name: 'Plate Zottman Curl', type: 'plate', cue: 'Curl up, rotate, lower slow', tutorial: 'https://www.youtube.com/watch?v=i1AkTNCulKQ' },
          { name: 'Tricep Overhead Extension', type: 'plate', cue: 'Plate behind head, extend', tutorial: 'https://www.youtube.com/watch?v=X-iV-cG8cYs' },
          { name: 'Pike Push-up', type: 'bodyweight', cue: 'Hips high, shoulders-first', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
        ]
      },
      {
        label: 'Finish', effort: 'Max', exercises: [
          { name: 'Explosive Push-up', type: 'bodyweight', cue: 'Hands leave ground each rep', tutorial: 'https://www.youtube.com/watch?v=rruHM_sB2Hc' },
          { name: 'Plate Push Press', type: 'plate', cue: 'Slight leg drive, press overhead', tutorial: 'https://www.youtube.com/watch?v=MPSD9QkFYPw' },
          { name: 'Plate Curl 21s', type: 'plate', cue: '7 lower · 7 upper · 7 full', tutorial: 'https://www.youtube.com/watch?v=i1AkTNCulKQ' },
          { name: 'Tricep Push-up Burnout', type: 'bodyweight', cue: 'Hands narrow, elbows back, max reps', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
          { name: 'Bear Crawl Shoulder Tap', type: 'bodyweight', cue: 'Tap opposite shoulder each rep', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
        ]
      },
    ],
    cooldown: MONDAY_COOLDOWN,
  },
  {
    id: 'tuesday',
    day: 'Tuesday',
    muscles: 'Legs',
    warmup: TUESDAY_WARMUP,
    rounds: [
      {
        label: 'Build', effort: '70%', exercises: [
          { name: 'Bodyweight Squat', type: 'bodyweight', cue: 'Controlled tempo, full depth', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
          { name: 'Reverse Lunge', type: 'bodyweight', cue: 'Step back, knee to floor', tutorial: 'https://www.youtube.com/watch?v=sFM7Hi8kOKA' },
          { name: 'Plate Goblet Squat', type: 'plate', cue: 'Hold plate at chest', tutorial: 'https://www.youtube.com/watch?v=MeIiIdhvXT4' },
          { name: 'Glute Bridge', type: 'bodyweight', cue: 'Squeeze hard at top', tutorial: 'https://www.youtube.com/watch?v=8bbE64NuDTU' },
          { name: 'Plate Romanian Deadlift', type: 'plate', cue: 'Hinge at hips, flat back', tutorial: 'https://www.youtube.com/watch?v=_oyxCn2iSjU' },
        ]
      },
      {
        label: 'Load', effort: '80%', exercises: [
          { name: 'Sumo Squat (Plate)', type: 'plate', cue: 'Wide stance, toes out', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
          { name: 'Walking Lunge', type: 'bodyweight', cue: 'Long steps, upright torso', tutorial: 'https://www.youtube.com/watch?v=sFM7Hi8kOKA' },
          { name: 'Single-leg Deadlift', type: 'bodyweight', cue: 'Hinge on one leg, reach for floor', tutorial: 'https://www.youtube.com/watch?v=_oyxCn2iSjU' },
          { name: 'Wall Sit', type: 'bodyweight', cue: 'Back flat on wall, 90° knees', tutorial: 'https://www.youtube.com/watch?v=y-wV4Venusw' },
          { name: 'Calf Raise (Plate)', type: 'plate', cue: 'Hold plate, slow up and down', tutorial: 'https://www.youtube.com/watch?v=gwLzBJYoWlI' },
        ]
      },
      {
        label: 'Push', effort: '90%', exercises: [
          { name: 'Jump Squat', type: 'bodyweight', cue: 'Explode up, soft landing', tutorial: 'https://www.youtube.com/watch?v=Azl5tkCzDcc' },
          { name: 'Bulgarian Split Squat', type: 'bodyweight', cue: 'Rear foot elevated on chair', tutorial: 'https://www.youtube.com/watch?v=hiLF_pF3EJM' },
          { name: 'Plate Squat Pulse', type: 'plate', cue: 'Hold at bottom, small pulses', tutorial: 'https://www.youtube.com/watch?v=MeIiIdhvXT4' },
          { name: 'Lateral Lunge', type: 'bodyweight', cue: 'Wide step to side, push back', tutorial: 'https://www.youtube.com/watch?v=sFM7Hi8kOKA' },
          { name: 'Glute Bridge w/ Plate', type: 'plate', cue: 'Plate on hips, squeeze at top', tutorial: 'https://www.youtube.com/watch?v=8bbE64NuDTU' },
        ]
      },
      {
        label: 'Finish', effort: 'Max', exercises: [
          { name: 'Squat Jump Burnout', type: 'bodyweight', cue: 'Max reps, max effort', tutorial: 'https://www.youtube.com/watch?v=Azl5tkCzDcc' },
          { name: 'Alt. Reverse Lunge Jump', type: 'bodyweight', cue: 'Switch legs in the air', tutorial: 'https://www.youtube.com/watch?v=sFM7Hi8kOKA' },
          { name: 'Plate Overhead Squat', type: 'plate', cue: 'Plate locked out overhead', tutorial: 'https://www.youtube.com/watch?v=MeIiIdhvXT4' },
          { name: 'Step-up (Chair)', type: 'bodyweight', cue: 'Drive through top leg', tutorial: 'https://www.youtube.com/watch?v=dQqApCGd5Ss' },
          { name: 'Speed Skater', type: 'bodyweight', cue: 'Lateral bounds, stick landing', tutorial: 'https://www.youtube.com/watch?v=NoeAcvGHSQk' },
        ]
      },
    ],
    cooldown: TUESDAY_COOLDOWN,
  },
  {
    id: 'wednesday',
    day: 'Wednesday',
    muscles: 'Core & Back',
    warmup: WEDNESDAY_WARMUP,
    rounds: [
      {
        label: 'Build', effort: '70%', exercises: [
          { name: 'Plank', type: 'bodyweight', cue: 'Hold tight, squeeze everything', tutorial: 'https://www.youtube.com/watch?v=PaR6Z7D5fl4' },
          { name: 'Superman Hold', type: 'bodyweight', cue: 'Arms and legs lifted, hold', tutorial: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ' },
          { name: 'Plate Bent-over Row', type: 'plate', cue: 'Hinge forward, pull plate to hip', tutorial: 'https://www.youtube.com/watch?v=VKsmxmQzhCU' },
          { name: 'Dead Bug', type: 'bodyweight', cue: 'Opposite arm/leg, back flat', tutorial: 'https://www.youtube.com/watch?v=4XLEnwUr1d8' },
          { name: 'Plate Good Morning', type: 'plate', cue: 'Plate behind head, hinge forward', tutorial: 'https://www.youtube.com/watch?v=VKsmxmQzhCU' },
        ]
      },
      {
        label: 'Load', effort: '80%', exercises: [
          { name: 'Hollow Body Hold', type: 'bodyweight', cue: 'Lower back pressed to floor', tutorial: 'https://www.youtube.com/watch?v=LlDNef_Ztsc' },
          { name: 'Plate Pull-through', type: 'plate', cue: 'On all fours, drag plate side to side', tutorial: 'https://www.youtube.com/watch?v=VKsmxmQzhCU' },
          { name: 'Side Plank', type: 'bodyweight', cue: 'Stack feet, hips high', tutorial: 'https://www.youtube.com/watch?v=PaR6Z7D5fl4' },
          { name: 'Plate Pass Situp', type: 'plate', cue: 'Sit up, pass plate overhead to floor', tutorial: 'https://www.youtube.com/watch?v=VKsmxmQzhCU' },
          { name: 'Bird Dog', type: 'bodyweight', cue: 'Extend arm/opposite leg, hold', tutorial: 'https://www.youtube.com/watch?v=4XLEnwUr1d8' },
        ]
      },
      {
        label: 'Push', effort: '90%', exercises: [
          { name: 'Plank Drag', type: 'plate', cue: 'Plank position, drag plate side to side', tutorial: 'https://www.youtube.com/watch?v=PaR6Z7D5fl4' },
          { name: 'V-up', type: 'bodyweight', cue: 'Touch toes at top', tutorial: 'https://www.youtube.com/watch?v=LlDNef_Ztsc' },
          { name: 'Renegade Row', type: 'plate', cue: 'Plank, row plate each side', tutorial: 'https://www.youtube.com/watch?v=jfZwJYLSjr8' },
          { name: 'Bicycle Crunch', type: 'bodyweight', cue: 'Elbow to opposite knee, controlled', tutorial: 'https://www.youtube.com/watch?v=_O1viJT82S8' },
          { name: 'Plate Twists', type: 'plate', cue: 'Seated, rotate plate side to side', tutorial: 'https://www.youtube.com/watch?v=VKsmxmQzhCU' },
        ]
      },
      {
        label: 'Finish', effort: 'Max', exercises: [
          { name: 'Plank to Push-up', type: 'bodyweight', cue: 'Forearm to hands, alternate lead', tutorial: 'https://www.youtube.com/watch?v=PaR6Z7D5fl4' },
          { name: 'Plate Slam (Controlled)', type: 'plate', cue: 'Overhead to floor, controlled', tutorial: 'https://www.youtube.com/watch?v=MPSD9QkFYPw' },
          { name: 'Mountain Climber', type: 'bodyweight', cue: 'Fast knees to chest', tutorial: 'https://www.youtube.com/watch?v=PaR6Z7D5fl4' },
          { name: 'Plate Windmill', type: 'plate', cue: 'Arm overhead, hinge to side', tutorial: 'https://www.youtube.com/watch?v=VKsmxmQzhCU' },
          { name: 'Flutter Kicks', type: 'bodyweight', cue: 'Legs 6 inches off floor, fast kicks', tutorial: 'https://www.youtube.com/watch?v=LlDNef_Ztsc' },
        ]
      },
    ],
    cooldown: WEDNESDAY_COOLDOWN,
  },
  {
    id: 'thursday',
    day: 'Thursday',
    muscles: 'Chest · Triceps · Biceps · Shoulders',
    warmup: MONDAY_WARMUP,
    rounds: [
      {
        label: 'Build', effort: '70%', exercises: [
          { name: 'Incline Push-up', type: 'bodyweight', cue: 'Hands elevated on chair', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
          { name: 'Plate Lateral Raise', type: 'plate', cue: 'Arms straight, raise to sides', tutorial: 'https://www.youtube.com/watch?v=PHS4NuiJeAE' },
          { name: 'Plate Reverse Curl', type: 'plate', cue: 'Palms down, curl up', tutorial: 'https://www.youtube.com/watch?v=i1AkTNCulKQ' },
          { name: 'Tricep Overhead (Plate)', type: 'plate', cue: 'Plate behind head, extend up', tutorial: 'https://www.youtube.com/watch?v=X-iV-cG8cYs' },
          { name: 'Plate Chest Squeeze Press', type: 'plate', cue: 'Squeeze plate between palms, press out', tutorial: 'https://www.youtube.com/watch?v=MPSD9QkFYPw' },
        ]
      },
      {
        label: 'Load', effort: '80%', exercises: [
          { name: 'Push-up w/ Shoulder Tap', type: 'bodyweight', cue: 'At top, tap opposite shoulder', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
          { name: 'Plate Scarecrow', type: 'plate', cue: 'Arms at 90°, rotate up', tutorial: 'https://www.youtube.com/watch?v=PHS4NuiJeAE' },
          { name: 'Plate Cross-body Curl', type: 'plate', cue: 'Curl plate across body', tutorial: 'https://www.youtube.com/watch?v=i1AkTNCulKQ' },
          { name: 'Close-grip Push-up', type: 'bodyweight', cue: 'Hands under shoulders, elbows tight', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
          { name: 'Plate Front Press Out', type: 'plate', cue: 'Press plate straight out from chest', tutorial: 'https://www.youtube.com/watch?v=e8my9OOCXVo' },
        ]
      },
      {
        label: 'Push', effort: '90%', exercises: [
          { name: 'Plyometric Push-up', type: 'bodyweight', cue: 'Explode up, hands leave ground', tutorial: 'https://www.youtube.com/watch?v=rruHM_sB2Hc' },
          { name: 'Plate Shoulder Circuit', type: 'plate', cue: 'Front raise → lateral → overhead', tutorial: 'https://www.youtube.com/watch?v=PHS4NuiJeAE' },
          { name: 'Plate Drag Curl', type: 'plate', cue: 'Elbows back, drag plate up body', tutorial: 'https://www.youtube.com/watch?v=i1AkTNCulKQ' },
          { name: 'Tricep Dip (Feet Elevated)', type: 'bodyweight', cue: 'Feet on chair for deeper dip', tutorial: 'https://www.youtube.com/watch?v=T1L4smOP0L8' },
          { name: 'Archer Push-up', type: 'bodyweight', cue: 'Wide hands, shift weight to one arm', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
        ]
      },
      {
        label: 'Finish', effort: 'Max', exercises: [
          { name: 'Push-up Burnout', type: 'bodyweight', cue: 'Max reps, any style', tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
          { name: 'Plate Thruster', type: 'plate', cue: 'Squat + press overhead', tutorial: 'https://www.youtube.com/watch?v=MPSD9QkFYPw' },
          { name: '21s Curl (Plate)', type: 'plate', cue: '7 lower · 7 upper · 7 full', tutorial: 'https://www.youtube.com/watch?v=i1AkTNCulKQ' },
          { name: 'Dip to Failure', type: 'bodyweight', cue: 'Max reps, full range', tutorial: 'https://www.youtube.com/watch?v=T1L4smOP0L8' },
          { name: 'Plate Around-the-World', type: 'plate', cue: 'Circle plate around head', tutorial: 'https://www.youtube.com/watch?v=PHS4NuiJeAE' },
        ]
      },
    ],
    cooldown: MONDAY_COOLDOWN,
  },
  {
    id: 'friday',
    day: 'Friday',
    muscles: 'Legs',
    warmup: TUESDAY_WARMUP,
    rounds: [
      {
        label: 'Build', effort: '70%', exercises: [
          { name: 'Bodyweight Squat (Tempo)', type: 'bodyweight', cue: '3 sec down, 1 sec up', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
          { name: 'Forward Lunge', type: 'bodyweight', cue: 'Step forward, knee to floor', tutorial: 'https://www.youtube.com/watch?v=sFM7Hi8kOKA' },
          { name: 'Plate Sumo Deadlift', type: 'plate', cue: 'Wide stance, plate hangs center', tutorial: 'https://www.youtube.com/watch?v=_oyxCn2iSjU' },
          { name: 'Hip Thrust (Floor)', type: 'bodyweight', cue: 'Shoulders on floor, thrust up', tutorial: 'https://www.youtube.com/watch?v=8bbE64NuDTU' },
          { name: 'Plate Side Lunge', type: 'plate', cue: 'Hold plate at chest, lunge side', tutorial: 'https://www.youtube.com/watch?v=sFM7Hi8kOKA' },
        ]
      },
      {
        label: 'Load', effort: '80%', exercises: [
          { name: 'Rev. Lunge to Knee Drive', type: 'bodyweight', cue: 'Lunge back, drive knee up', tutorial: 'https://www.youtube.com/watch?v=sFM7Hi8kOKA' },
          { name: 'Plate Front Squat', type: 'plate', cue: 'Plate at chest, squat deep', tutorial: 'https://www.youtube.com/watch?v=MeIiIdhvXT4' },
          { name: 'Single-leg Glute Bridge', type: 'bodyweight', cue: 'One leg up, bridge and squeeze', tutorial: 'https://www.youtube.com/watch?v=8bbE64NuDTU' },
          { name: 'Plate Drag Lateral Walk', type: 'plate', cue: 'Squat walk, dragging plate' },
          { name: 'Slow Tempo Squat', type: 'bodyweight', cue: '4 sec down, 4 sec up', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
        ]
      },
      {
        label: 'Push', effort: '90%', exercises: [
          { name: 'Box Jump / Jump Squat', type: 'bodyweight', cue: 'Explosive vertical leap', tutorial: 'https://www.youtube.com/watch?v=Azl5tkCzDcc' },
          { name: 'Plate Lunge & Twist', type: 'plate', cue: 'Lunge, rotate plate over front leg', tutorial: 'https://www.youtube.com/watch?v=sFM7Hi8kOKA' },
          { name: 'Pistol Squat Assist', type: 'plate', cue: 'Hold plate for counterbalance', tutorial: 'https://www.youtube.com/watch?v=gsNoPYwWXeM' },
          { name: 'Lateral Lunge to Squat', type: 'bodyweight', cue: 'Side lunge, then center squat', tutorial: 'https://www.youtube.com/watch?v=sFM7Hi8kOKA' },
          { name: 'Glute Bridge March', type: 'bodyweight', cue: 'Bridge position, alternate knee lifts', tutorial: 'https://www.youtube.com/watch?v=8bbE64NuDTU' },
        ]
      },
      {
        label: 'Finish', effort: 'Max', exercises: [
          { name: 'Squat Jump → Rev. Lunge', type: 'bodyweight', cue: 'Jump squat, land into lunge', tutorial: 'https://www.youtube.com/watch?v=Azl5tkCzDcc' },
          { name: 'Plate Swings', type: 'plate', cue: 'Hinge, swing plate to eye level', tutorial: 'https://www.youtube.com/watch?v=MPSD9QkFYPw' },
          { name: 'Wall Sit to Failure', type: 'bodyweight', cue: 'Hold as long as possible', tutorial: 'https://www.youtube.com/watch?v=y-wV4Venusw' },
          { name: 'Broad Jump + Backpedal', type: 'bodyweight', cue: 'Jump forward, shuffle back', tutorial: 'https://www.youtube.com/watch?v=Azl5tkCzDcc' },
          { name: 'Plate OH Squat Burnout', type: 'plate', cue: 'Plate overhead, max squats', tutorial: 'https://www.youtube.com/watch?v=MeIiIdhvXT4' },
        ]
      },
    ],
    cooldown: TUESDAY_COOLDOWN,
  },
];

// ── IMAGE MAP — exercise name → local filename ──
const IMAGE_MAP = {
  // Mon/Thu Warm-up
  'Arm Circles': 'Arm Circles.gif',
  'Cross-body Arm Swings': 'Cross-body Arm Swings.gif',
  'Shoulder Roll & Shrug': 'Shoulder Roll & Shrug.gif',
  'Inchworm': 'inchworm.gif',
  "World's Greatest Stretch": 'worlds greatest stretch.gif',
  'Band Pull-apart (Plate Sub)': 'Band Pull-apart (Plate Sub).gif',
  'Push-up Negative': 'Push-up Negative.gif',
  'Scapular Push-up': 'Scapular Push-up.gif',
  // Tue/Fri Warm-up
  'Leg Swing (Front to Back)': 'Leg Swing (Front to Back).gif',
  'Leg Swing (Side to Side)': 'Leg Swing (Side to Side).gif',
  'Hip Circle': 'Hip Circle.gif',
  'Bodyweight Squat (Slow)': 'Bodyweight Squat (Slow).gif',
  'Walking Knee Hug': 'Walking Knee Hug.gif',
  'Ankle Circle': 'Ankle Circle.gif',
  'Glute Bridge Hold': 'Glute Bridge Hold.gif',
  'Lateral Squat Walk': 'Lateral Squat Walk.gif',
  'Single-leg Calf Raise': 'Single-leg Calf Raise.gif',
  // Wed Warm-up
  'Cat-Cow': 'Cat-Cow.gif',
  'Thoracic Rotation': 'Thoracic Rotation.gif',
  "Child's Pose Reach": "Child's Pose Reach.gif",
  'Hip Hinge with Arms': 'Hip Hinge with Arms.jpg',
  'Thread the Needle': 'Thread the Needle.gif',
  'Dead Bug (Slow)': 'Dead Bug (Slow).gif',
  'Bird Dog Hold': 'Bird Dog Hold.webp',
  'Plank 10-sec Hold': 'Plank 10-sec Hold.jpg',
  // Monday R1–R4
  'Push-up': 'Push-up.gif',
  'Plate Overhead Press': 'Plate Overhead Press.gif',
  'Plate Curl': 'Plate Curl.gif',
  'Tricep Dip': 'Tricep Dip.gif',
  'Lateral Raise (Plate)': 'Lateral Raise (Plate).gif',
  'Wide Push-up': 'Wide Push-up.gif',
  'Plate Front Raise': 'Plate Front Raise.gif',
  'Hammer Curl (Plate)': 'Hammer Curl (Plate).gif',
  'Diamond Push-up': 'Diamond Push-up.gif',
  'Plate Upright Row': 'Plate Upright Row.gif',
  'Decline Push-up': 'Decline Push-up.gif',
  'Plate Arnold Press': 'Plate Arnold Press.gif',
  'Plate Zottman Curl': 'Plate Zottman Curl.gif',
  'Tricep Overhead Extension': 'Tricep Overhead Extension.gif',
  'Pike Push-up': 'Pike Push-up.gif',
  'Explosive Push-up': 'Explosive Push-up.gif',
  'Plate Push Press': 'Plate Push Press.gif',
  'Plate Curl 21s': 'Plate Curl 21s.gif',
  'Tricep Push-up Burnout': 'Tricep Push-up Burnout.webp',
  'Bear Crawl Shoulder Tap': 'Bear Crawl Shoulder Tap.jpg',
  // Tuesday R1–R4
  'Bodyweight Squat': 'Bodyweight Squat.gif',
  'Reverse Lunge': 'Reverse Lunge.gif',
  'Plate Goblet Squat': 'Plate Goblet Squat.gif',
  'Glute Bridge': 'Glute Bridge.gif',
  'Plate Romanian Deadlift': 'Plate Romanian Deadlift.gif',
  'Sumo Squat (Plate)': 'Sumo Squat (Plate).gif',
  'Walking Lunge': 'Walking Lunge.gif',
  'Single-leg Deadlift': 'Single-leg Deadlift.gif',
  'Wall Sit': 'Wall Sit.gif',
  'Calf Raise (Plate)': 'Calf Raise (Plate).gif',
  'Jump Squat': 'Jump Squat.gif',
  'Bulgarian Split Squat': 'Bulgarian Split Squat.gif',
  'Plate Squat Pulse': 'Plate Squat Pulse.gif',
  'Lateral Lunge': 'Lateral Lunge.gif',
  'Glute Bridge w/ Plate': 'Glute Bridge w: Plate.gif',
  'Squat Jump Burnout': 'Squat Jump Burnout.gif',
  'Alt. Reverse Lunge Jump': 'Alt. Reverse Lunge Jump.gif',
  'Plate Overhead Squat': 'Plate Overhead Squat.gif',
  'Step-up (Chair)': 'Step-up (Chair).gif',
  'Speed Skater': 'Speed Skater.gif',
  // Wednesday R1–R4
  'Plank': 'Plank.jpg',
  'Superman Hold': 'Superman Hold.gif',
  'Plate Bent-over Row': 'Plate Bent-over Row.gif',
  'Dead Bug': 'Dead Bug.gif',
  'Plate Good Morning': 'Plate Good Morning.jpeg',
  'Hollow Body Hold': 'Hollow Body Hold.gif',
  'Plate Pull-through': 'Plate Pull-through.gif',
  'Side Plank': 'Side Plank.gif',
  'Plate Pass Situp': 'Plate Pass Situp.gif',
  'Bird Dog': 'Bird Dog.gif',
  'Plank Drag': 'Plank Drag.gif',
  'V-up': 'V-up.gif',
  'Renegade Row': 'Renegade Row.gif',
  'Bicycle Crunch': 'Bicycle Crunch.gif',
  'Plate Twists': 'Plate Twists.gif',
  'Plank to Push-up': 'Plank to Push-up.gif',
  'Plate Slam (Controlled)': 'Plate Slam (Controlled).gif',
  'Mountain Climber': 'Mountain Climber.gif',
  'Plate Windmill': 'Plate Windmill.gif',
  'Flutter Kicks': 'Flutter Kicks.gif',
  // Thursday R1–R4
  'Incline Push-up': 'Incline Push-up.gif',
  'Plate Lateral Raise': 'Plate Lateral Raise.gif',
  'Plate Reverse Curl': 'Plate Reverse Curl.gif',
  'Tricep Overhead (Plate)': 'Tricep Overhead (Plate).gif',
  'Plate Chest Squeeze Press': 'Plate Chest Squeeze Press.gif',
  'Push-up w/ Shoulder Tap': 'Push-up w: Shoulder Tap.gif',
  'Plate Scarecrow': 'Plate Scarecrow.gif',
  'Plate Cross-body Curl': 'Plate Cross-body Curl.gif',
  'Close-grip Push-up': 'Close-grip Push-up.gif',
  'Plate Front Press Out': 'Plate Front Press Out.gif',
  'Plyometric Push-up': 'Plyometric Push-up.gif',
  'Plate Shoulder Circuit': 'Plate Shoulder Circuit.gif',
  'Plate Drag Curl': 'Plate Drag Curl.gif',
  'Tricep Dip (Feet Elevated)': 'Tricep Dip (Feet Elevated).gif',
  'Archer Push-up': 'Archer Push-up.gif',
  'Push-up Burnout': 'Push-up Burnout.gif',
  'Plate Thruster': 'Plate Thruster.gif',
  '21s Curl (Plate)': '21s Curl (Plate).gif',
  'Dip to Failure': 'Dip to Failure.gif',
  'Plate Around-the-World': 'Plate Around-the-World.gif',
  // Friday R1–R4
  'Bodyweight Squat (Tempo)': 'Bodyweight Squat (Tempo).gif',
  'Forward Lunge': 'Forward Lunge.gif',
  'Plate Sumo Deadlift': 'Plate Sumo Deadlift.gif',
  'Hip Thrust (Floor)': 'Hip Thrust (Floor).gif',
  'Plate Side Lunge': 'Plate Side Lunge.jpg',
  'Rev. Lunge to Knee Drive': 'Rev. Lunge to Knee Drive.gif',
  'Plate Front Squat': 'Plate Front Squat.gif',
  'Single-leg Glute Bridge': 'Single-leg Glute Bridge.gif',
  'Plate Drag Lateral Walk': 'Plate Drag Lateral Walk.gif',
  'Slow Tempo Squat': 'Slow Tempo Squat.gif',
  'Box Jump / Jump Squat': 'Box Jump : Jump Squat.gif',
  'Plate Lunge & Twist': 'Plate Lunge & Twist.gif',
  'Pistol Squat Assist': 'Pistol Squat Assist.gif',
  'Lateral Lunge to Squat': 'Lateral Lunge to Squat.gif',
  'Glute Bridge March': 'Glute Bridge March.gif',
  'Squat Jump → Rev. Lunge': 'Squat Jump → Rev. Lunge.gif',
  'Plate Swings': 'Plate Swings.gif',
  'Wall Sit to Failure': 'Wall Sit to Failure.gif',
  'Broad Jump + Backpedal': 'Broad Jump + Backpedal.gif',
  'Plate OH Squat Burnout': 'Plate OH Squat Burnout.gif',
};

const ROUND_COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444'];
const ROUND_LABELS = ['Build', 'Load', 'Push', 'Finish'];
const WORK_TIME = 30;
const TRANSITION_TIME = 10;
const ROUND_REST_TIME = 90;
const EXERCISES_PER_ROUND = 5;
const TOTAL_ROUNDS = 4;
