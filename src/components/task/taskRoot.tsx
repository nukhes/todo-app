import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import Button from "../ui-misc/button";
import { taskArray } from "../TaskSection/taskSection";

interface taskProps {
		text: string;
		key: string;
		state?: boolean;
}

export default function TaskRoot({ text, key, state }: taskProps) {

	const TaskCheckboxState = [
		<Button icon={<MdCheckBoxOutlineBlank />}/>,
		<Button icon={<MdCheckBox />}/>
	]


	return (
		<div id={key} className="
		flex justify-between items-center
	bg-zinc-800 p-3 border-[1px] border-zinc-500
		rounded-lg text-sm font-normal w-full
		">
			<span className="text-lg">{text}</span>
			
			<input type="checkbox" className="w-7 h-7" onClick={() => {
				//aaaaaaaa
			}}/>

		</div>
	);
}