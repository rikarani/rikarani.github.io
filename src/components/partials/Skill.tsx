import { useContext } from "react";
import { DialogContext, SkillContext } from "@/context";
import { ArrowRight } from "./svg";
import type { SkillProps } from "@/types";

export default function Skill({ stackname, description, logo }: SkillProps): React.JSX.Element {
  const { setIsOpen } = useContext(DialogContext);
  const { setSkill } = useContext(SkillContext);

  function handleClick() {
    setIsOpen(true);
    setSkill(stackname);
  }

  return (
    <>
      <div className="gap-2.5 border-b border-t border-gray-700 py-3 md:flex md:flex-col md:justify-between md:border-0">
        <div className="flex items-center gap-2.5">
          <div>{logo}</div>
          <div>
            <h6 className="mt-0.5 text-xl font-medium">{stackname}</h6>
            <p>{description}</p>
          </div>
        </div>
        <div className="mt-2">
          <button onClick={handleClick} className="group flex w-full items-center justify-center gap-2 rounded-full border border-secondary/60 px-2 py-1 hover:bg-secondary/70 hover:text-primary">
            Lihat Sumber Belajar <ArrowRight className="h-6 w-6 transition-transform duration-300 ease-linear group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </>
  );
}
