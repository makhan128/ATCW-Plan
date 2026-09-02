import { WorkoutDay } from './types';

export const workoutPlan: WorkoutDay[] = [
  {
    id: 1,
    title: 'Shoulders & Arms',
    exercises: [
      {
        id: '1-1',
        name: 'Shoulder Press',
        equipment: 'Machine',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0869-vqsbmL0.gif'
      },
      {
        id: '1-2',
        name: 'Side Raises',
        equipment: 'Machine',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0584-dRTfGZT.gif'
      },
      {
        id: '1-3',
        name: 'Facepulls',
        equipment: 'Cable & Rope',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0233-ZfyAGhK.gif'
      },
      {
        id: '1-4',
        name: 'Bicep Curls',
        equipment: 'Dumbbells',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0294-NbVPDMW.gif'
      },
      {
        id: '1-5',
        name: 'Hammer Curls',
        equipment: 'Dumbbells',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0313-slDvUAU.gif'
      },
      {
        id: '1-6',
        name: 'Tricep Extensions',
        equipment: 'Straight Bar',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/2406-ThKP69G.gif'
      },
      {
        id: '1-7',
        name: 'Triceps Extensions',
        equipment: 'One Hand',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0231-sYCcnon.gif'
      },
      {
        id: '1-8',
        name: 'Reverse Curls (Forearms)',
        equipment: 'Dumbbells',
        sets: 3,
        reps: 'High',
        notes: 'Use light dumbbells and do high reps.',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0429-0IgNjSM.gif'
      }
    ]
  },
  {
    id: 2,
    title: 'Legs',
    exercises: [
      {
        id: '2-1',
        name: 'Leg Press',
        equipment: 'Machine',
        sets: 3,
        reps: '15',
        notes: 'Use the leg press machine (sled/horizontal).',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0739-10Z2DXU.gif'
      },
      {
        id: '2-2',
        name: 'Leg Extensions',
        equipment: 'Machine',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0585-my33uHU.gif'
      },
      {
        id: '2-3',
        name: 'Leg Curls',
        equipment: 'Machine (Lying)',
        sets: 3,
        reps: '15',
        notes: 'Use the lying leg curl machine.',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0586-17lJ1kr.gif'
      },
      {
        id: '2-4',
        name: 'Calf Raises',
        equipment: 'Machine',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0594-bOOdeyc.gif'
      }
    ]
  },
  {
    id: 3,
    title: 'Chest & Triceps',
    exercises: [
      {
        id: '3-1',
        name: 'Bench Press',
        equipment: 'Smith Machine',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0748-trqKQv2.gif'
      },
      {
        id: '3-2',
        name: 'Incline Bench Press',
        equipment: 'Dumbbells',
        sets: 3,
        reps: '15',
        notes: 'Start very light and focus on form.',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0314-ns0SIbU.gif'
      },
      {
        id: '3-3',
        name: 'Chest Fly',
        equipment: 'Machine',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0596-v3xmPAR.gif'
      },
      {
        id: '3-4',
        name: 'Tricep Extensions',
        equipment: 'Straight Bar',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/2406-ThKP69G.gif'
      },
      {
        id: '3-5',
        name: 'Triceps Extensions',
        equipment: 'One Hand',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0231-sYCcnon.gif'
      }
    ]
  },
  {
    id: 4,
    title: 'Back & Biceps',
    notes: 'You can do some core workouts after if you still have some energy.',
    exercises: [
      {
        id: '4-1',
        name: 'Lat Pulldowns',
        equipment: 'Cable Machine',
        sets: 3,
        reps: '15',
        notes: 'Seated, pulling the bar down to your upper chest.',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0198-RVwzP10.gif'
      },
      {
        id: '4-2',
        name: 'Seated Rows',
        equipment: 'Cable Machine',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0861-fUBheHs.gif'
      },
      {
        id: '4-3',
        name: 'Single Handed Seated Rows',
        equipment: 'Cable Machine',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0214-vpp9Ku2.gif'
      },
      {
        id: '4-4',
        name: 'Back Extensions',
        equipment: 'Hyperextension Bench',
        sets: 3,
        reps: '6-10',
        notes: 'Targeting lower back. Keep reps low and strictly focus on form.',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0489-zhMwOwE.gif'
      },
      {
        id: '4-5',
        name: 'Bicep Curls',
        equipment: 'Dumbbells',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0294-NbVPDMW.gif'
      },
      {
        id: '4-6',
        name: 'Hammer Curls',
        equipment: 'Dumbbells',
        sets: 3,
        reps: '15',
        gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0313-slDvUAU.gif'
      }
    ]
  }
];
