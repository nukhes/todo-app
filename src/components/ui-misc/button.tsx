import { ReactNode } from "react";

interface buttonProps {
  icon: ReactNode;
  onClick?: any;
}

export default function Button({ icon, onClick }: buttonProps) {
  return (
    <button className="
    flex justify-center items-center
    bg-zinc-950 text-slate-100 text-xl h-8 w-8 rounded-lg
    hover:bg-slate-400 hover:text-zinc-950
    " onClick={onClick}>
      {icon}
    </button>
  );
}