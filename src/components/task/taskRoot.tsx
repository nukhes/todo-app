interface taskProps {
		text: string;
		key: string;
}

export default function TaskRoot({ text, key }: taskProps) {
	return (
		<div id={key} className="
		flex bg-zinc-800 p-3 border-[1px] border-zinc-500
		rounded-lg text-sm font-normal w-full
		">
			<span>{text}</span>
		</div>
	);
}