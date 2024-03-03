interface inputProps {
  placeholder: string;
  value?: string;
  onChange?: any;
}

export default function Input({ placeholder, value, onChange }: inputProps) {
  return (
    <input value={value} onChange={onChange} type="text" placeholder={placeholder} className="
    bg-zinc-900 px-3 py-1 rounded-lg
    focus:outline-none focus:outline-slate-400
    " />
  );
}