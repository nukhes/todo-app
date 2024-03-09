import { MdDelete } from "react-icons/md";
import Button from "../ui-misc/button";
import { ReactNode, useState } from "react";
import { taskArray } from "../TaskSection/taskSection";

interface taskProps {
		text: string;
		keyLocal: string;
}

export default function TaskRoot({ text, keyLocal}: taskProps) {
	const TaskDeleteButtonNode = <Button icon={<MdDelete />}/>;
	const [TaskDeleteButton, SetTaskDeleteButton] = useState<ReactNode>();

	function TaskCheckBoxOnClick() {
		taskArray[keyLocal].state ? taskArray[keyLocal].state = false : taskArray[keyLocal].state = true;
		TaskDeleteButtonRender();
		console.log(`task id: ${keyLocal}\ntask state: ${taskArray[keyLocal].state}`);
	}

	function TaskDeleteButtonRender() {
		let res: ReactNode;

		taskArray[keyLocal].state ? res = <div></div> : res = TaskDeleteButtonNode;
		SetTaskDeleteButton(res);

		return res;
	}

	function DeleteTask(key: number) {
		delete taskArray[key];
		console.log("viado");
	}

	return (
		<div id={keyLocal} className="
		flex justify-between items-center
	bg-zinc-800 p-3 border-[1px] border-zinc-500
		rounded-lg text-sm font-normal w-full
		">
			<span className="text-lg">{text}</span>

			<div className="flex gap-2 items-center">

				{TaskDeleteButton}
				
				<input type="checkbox" className="
				w-8 h-8 form-checkbox
				bg-zinc-950 rounded-lg
				checked:bg-purple-700
				" onClick={TaskCheckBoxOnClick} />

			</div> 

		</div>
	);
}