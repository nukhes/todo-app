interface taskProps {
		text: string;    
}

export default function TaskRoot({ text }: taskProps) {
	return (
		<div className="
		flex bg-zinc-800 p-3 border-[1px] border-zinc-500
		rounded-lg text-sm font-normal w-full
		">
			<span>{text}</span>
		</div>
	);
}