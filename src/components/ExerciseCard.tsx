import { Exercise } from '../types';
import { Info } from 'lucide-react';

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between h-full group overflow-hidden relative">
      <div className="z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-black px-2 py-1 rounded mb-3 inline-block uppercase tracking-wider">
              {exercise.equipment}
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">{exercise.name}</h3>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden mb-5 border border-zinc-800 bg-zinc-950 aspect-[4/3] flex items-center justify-center relative">
          {exercise.gifUrl ? (
            <img 
              src={exercise.gifUrl} 
              alt={exercise.name} 
              className="w-full h-full object-cover opacity-80 mix-blend-screen transition-opacity duration-300 group-hover:opacity-100"
              loading="lazy"
            />
          ) : (
            <span className="text-zinc-600 text-xs uppercase tracking-widest font-bold">Preview Loading...</span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div className="flex gap-4 items-center bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 mb-5">
          <div className="text-center flex-1">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Sets</p>
            <p className="text-lg font-bold text-zinc-200">{exercise.sets}</p>
          </div>
          <div className="h-8 w-[1px] bg-zinc-800"></div>
          <div className="text-center flex-1">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Reps</p>
            <p className="text-lg font-bold text-zinc-200">{exercise.reps}</p>
          </div>
        </div>

        {exercise.notes && (
          <div className="flex gap-2 items-start bg-zinc-800/30 p-4 rounded-xl border border-dashed border-zinc-700">
            <Info className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-zinc-400 font-medium leading-relaxed">{exercise.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
