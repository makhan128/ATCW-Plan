export interface Exercise {
  id: string;
  name: string;
  equipment: string;
  sets: number | string;
  reps: string;
  notes?: string;
  gifUrl: string;
}

export interface WorkoutDay {
  id: number;
  title: string;
  notes?: string;
  exercises: Exercise[];
}
