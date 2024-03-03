'use client'

import { IoIosAdd } from "react-icons/io";
import Button from "../ui-misc/button";
import Input from "../ui-misc/input";
import { NewTask, setTaskArray, taskArray } from "../TaskSection/taskSection";
import { useState } from "react";

export default function CreateTaskRoot() {

	var [taskValue, setValue] = useState("");

	function HandleInput(event) {
		setValue(event.target.value);
	}
	
	return (
		<div className="p-2 flex gap-1">

			<Input value={taskValue} onChange={HandleInput} placeholder="Nova tarefa..."/>
			<Button icon={<IoIosAdd />} onClick={() => {
				NewTask(taskValue);
				
			}}/>

		</div>
	);
}