'use client'

import TaskRoot from "@/components/task/taskRoot";
import React, { useState, ReactNode, useEffect } from "react";

export var taskArray: any = [];

// Create a new task and push to array
export function NewTask(value: string, key: string) {

  function Task(this: any) {
    this.text = value;
    this.key = key;
    this.state = true; 
  }

  taskArray.push(new (Task as any));

  console.log(`task criada com sucesso\n conteudo: ${value}\n key: ${key}`);
  console.log(taskArray);
}

export default function TaskSection() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    setTasks((): any => {

      var tasksNode: ReactNode = taskArray.map((element: any) => {
        return <TaskRoot key={element.key} text={element.text}/>;
      }); 
    
      return tasksNode;
      
    });
  });

  return (
    <div className="flex flex-col gap-2 w-full bg-zinc-700 p-3 rounded-lg">
      {tasks}
    </div>
  );
}