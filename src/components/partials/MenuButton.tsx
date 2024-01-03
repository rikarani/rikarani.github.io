type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function MenuButton({ onClick, text }: Props): React.JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative block w-full text-start text-xl font-medium text-gray-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300/70 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 sm:max-w-max"
    >
      {text}
    </button>
  );
}
