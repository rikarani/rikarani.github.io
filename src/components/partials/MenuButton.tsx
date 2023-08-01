import type { MenuButton } from "../../types";

export default function MenuButton({ type, onClick, text }: MenuButton): React.JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      className="relative block w-full rounded-lg text-start text-xl text-slate-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-300 after:transition-transform after:duration-200 after:ease-in-out after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100 md:max-w-max"
    >
      {text}
    </button>
  );
}