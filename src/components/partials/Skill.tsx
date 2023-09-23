import { ReactNode, MouseEventHandler } from "react";
import { Button } from "@material-tailwind/react";
import { ArrowRight } from "./svg";

type SkillProps = {
  logo: ReactNode;
  children: ReactNode;
  onClick: MouseEventHandler;
};

export default function Skill({ logo, children, onClick }: SkillProps): React.JSX.Element {
  return (
    <div className="border-b border-[#b6bec2] last:border-0 md:border-0 [&>button]:last:mb-0">
      <div className="flex items-center gap-3">
        {logo}
        <div>{children}</div>
      </div>
      <Button onClick={onClick} variant="filled" className="group mb-4 mt-3 flex items-center justify-center gap-2.5 rounded-full border border-gray-500 bg-transparent py-2.5 text-base md:mb-0" fullWidth>
        Cek Sumber Belajar
        <ArrowRight className="h-6 w-6 transition-all duration-200 ease-linear group-hover:translate-x-2" />
      </Button>
    </div>
  );
}
