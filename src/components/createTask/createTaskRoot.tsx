'use client'

import { IoIosAdd } from "react-icons/io";
import Button from "../ui-misc/button";
import Input from "../ui-misc/input";
import { NewTask, taskArray } from "../TaskSection/taskSection";
import { useState } from "react";

export var taskKey: string;
export default function CreateTaskRoot() {

	var [taskValue, setValue] = useState("");

	function HandleInput(event: any) {
		setValue(event.target.value);
	}
	
	return (
		<div className="p-2 flex gap-1">

			<Input value={taskValue} onChange={HandleInput} placeholder="Nova tarefa..."/>
			<Button icon={<IoIosAdd />} onClick={() => {
				
				// TODO: VERIFICAR SE A TASK FOR REPETIDA
				(taskValue.length > 0) ? NewTask(taskValue, taskKey) : console.log("insira texto no input da task!");
				taskKey = taskArray.length;
			}}/>

		</div>
	);
}