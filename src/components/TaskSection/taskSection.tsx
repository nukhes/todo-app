'use client'

import React, { useState, createContext, useContext, ReactNode } from "react";
import { IoIosAdd } from "react-icons/io";
import TaskRoot from "@/components/task/taskRoot";
import Button from "../ui-misc/button";
import Input from "../ui-misc/input";

export var taskArray: any = [];
export const TasksContext: any = createContext(undefined);

// Create a new task, push it to array and refresh.
export function NewTask(TaskUseState: any, value: string, key: string) {
  function Task(this: any) {
    this.text = value;
    this.key = key;
    this.state = true; 
  }

  taskArray.push(new (Task as any));
  RefreshTasks(TaskUseState);

  console.log(`task criada com sucesso\n conteudo: ${value}\n key: ${key}`);
  console.log(taskArray);
}

// Deletes a task by the key and refresh.
export function DeleteTask(key: string) {
  delete taskArray[key];
  console.log(`task id: ${key} deleted`);
}

export function RefreshTasks(TaskUseState: any) {
  TaskUseState(() => {
    var tasksNode: ReactNode = taskArray.map((element: any) => {
      return <TaskRoot keyLocal={element.key} text={element.text} />;
    });

    return tasksNode;
  });
}

export default function TaskSection() {
  const [tasks, setTasks] = useState();
  const [taskInput, setTaskInput] = useState('');

  function CreateNewTaskButton() {
    taskInput.length > 0 ? NewTask(setTasks, taskInput, taskArray.length) : console.log("insira texto no input da task!");
  }

  return (
    <div className="w-full flex flex-col gap-2">

      <div className="flex gap-1 w-full justify-center">
        <Input value={taskInput} onChange={(e: any) => {
          setTaskInput(e.target.value);
        }} placeholder="Nova tarefa..."/>

        <Button icon={<IoIosAdd />} onClick={CreateNewTaskButton}/>
      </div>

      <TasksContext.Provider value={[tasks, setTasks]}>
        <div className="flex flex-col gap-2 w-full pt-2">
          {tasks}
        </div>
      </TasksContext.Provider>

    </div>
  );
}