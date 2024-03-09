'use client'

import React, { useState, ReactNode } from "react";
import { IoIosAdd } from "react-icons/io";
import TaskRoot from "@/components/task/taskRoot";
import Button from "../ui-misc/button";
import Input from "../ui-misc/input";


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
  const [taskInput, setTaskInput] = useState('');

  function RefreshTasks() {
    setTasks((): any => {

      var tasksNode: ReactNode = taskArray.map((element: any) => {
        return <TaskRoot key={element.key} text={element.text}/>;
      }); 
    
      return tasksNode;
    });
  }

  function CreateNewTaskButton() {
    RefreshTasks();
    (taskInput.length > 0) ? NewTask(taskInput, taskArray.length) : console.log("insira texto no input da task!");
  }

  return (
    <div className="w-full flex flex-col gap-2">

      <div className="p-2 flex gap-1 w-full justify-center">
        <Input value={taskInput} onChange={(e: any) => {
          setTaskInput(e.target.value);
        }} placeholder="Nova tarefa..."/>

        <Button icon={<IoIosAdd />} onClick={CreateNewTaskButton}/>
      </div>

      <div className="flex flex-col gap-2 w-full bg-zinc-700 p-3 rounded-lg">
        {tasks}
      </div>

    </div>
  );
}