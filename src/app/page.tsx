import TaskSection from "@/components/TaskSection/taskSection";
//import CreateTaskRoot from "@/components/createTask/createTaskRoot";  

export default function Home() {
  return (
    <main className="
    flex flex-col justify-center items-center
    bg-zinc-800 w-full max-w-[630px] p-4 gap-2
    border-[1px] border-zinc-600 rounded-lg
    text-slate-300
    ">
      <h1 className="font-semibold text-xl">TO-DO📚</h1>

      
      <TaskSection />

    </main>
  );
}