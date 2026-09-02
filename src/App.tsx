import { useState } from 'react';
import { workoutPlan } from './data';
import { Info } from 'lucide-react';
import ExerciseCard from './components/ExerciseCard';

export default function App() {
  const [selectedDay, setSelectedDay] = useState(workoutPlan[0].id);
  const activeDay = workoutPlan.find(d => d.id === selectedDay);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-24">
       {/* Header */}
       <header className="px-6 py-8 max-w-4xl mx-auto flex justify-between items-end">
         <div>
           <h1 className="text-2xl font-bold tracking-tight text-white uppercase">
             ATCW <span className="text-cyan-500">Plan</span>
           </h1>
           <p className="text-zinc-500 text-sm mt-1">by Hani Arnold</p>
         </div>
       </header>

       <main className="max-w-4xl mx-auto px-4 mt-2">
         {/* Tabs */}
         <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar scroll-smooth">
           {workoutPlan.map(day => (
             <button
               key={day.id}
               onClick={() => setSelectedDay(day.id)}
               className={`flex-shrink-0 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-200 ${
                 selectedDay === day.id 
                 ? 'bg-cyan-500 text-black' 
                 : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-white'
               }`}
             >
               Day {day.id} • {day.title}
             </button>
           ))}
         </div>

         {/* Content */}
         {activeDay && (
           <div className="mt-6 space-y-6">
             {activeDay.notes && (
               <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex gap-3 items-start shadow-sm">
                 <Info className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                 <p className="text-sm text-zinc-300 font-medium leading-relaxed">{activeDay.notes}</p>
               </div>
             )}
             
             <div className="grid gap-4 sm:grid-cols-2">
               {activeDay.exercises.map(ex => (
                 <ExerciseCard key={ex.id} exercise={ex} />
               ))}
             </div>
           </div>
         )}
       </main>
    </div>
  );
}
