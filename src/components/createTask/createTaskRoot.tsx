import { IoIosAdd } from "react-icons/io";
import Button from "../ui-misc/button";
import Input from "../ui-misc/input";

export default function CreateTaskRoot() {
	return (
		<div className="p-2 flex gap-1">

		<Input placeholder="Nova tarefa..."/>
		<Button icon={<IoIosAdd />}/>

		</div>
	);
}