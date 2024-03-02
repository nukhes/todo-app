interface inputProps {
  placeholder: string;
}

export default function Input({ placeholder }: inputProps) {
  return (
    <input type="text" placeholder={placeholder} className="
    bg-zinc-900 px-3 py-1 rounded-lg
    focus:outline-none focus:outline-slate-400
    " />
  );
}