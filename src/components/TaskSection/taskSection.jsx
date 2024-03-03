'use client'

import TaskRoot from "@/components/task/taskRoot";
import { useState, ReactNode } from "react";

var taskArray = [];

export function Task(text) {
  this.text = text;
  this.state = true;
}
export function NewTask(value) {
  taskArray.push(new Task(value))
  console.log(`task criada com sucesso\nconteudo: ${value}`)
  console.log(taskArray);
  
}



export function RenderTasks() {
  setTasks(() => {
    taskArray.forEach(element => {
      return (
        <TaskRoot text={element.text} />
      );
    });
  });
}

export default function TaskSection() {
  const [tasks, setTasks] = useState();

  return (
    <div className="flex flex-col gap-2 w-full bg-zinc-700 p-3 rounded-lg">
      {tasks}
    </div>
  );
}