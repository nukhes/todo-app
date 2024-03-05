'use client'

import { IoIosAdd } from "react-icons/io";
import Button from "../ui-misc/button";
import Input from "../ui-misc/input";
import { NewTask, taskArray } from "../TaskSection/taskSection";
import { useState } from "react";

export default function CreateTaskRoot() {

	var [taskInput, setTaskInput] = useState('');
	
	
	return (
		<div className="p-2 flex gap-1">

			<Input value={taskInput} onChange={(e: any) => {
				
				setTaskInput(e.target.value);

			}} placeholder="Nova tarefa..."/>
			<Button icon={<IoIosAdd />} onClick={() => {

				var taskKey: string = taskArray.length;
				(taskInput.length > 0) ? NewTask(taskInput, taskKey) : console.log("insira texto no input da task!");

			}}/>

		</div>
	);
}