import { ArrowRight } from "./svg";
import type { SkillProps, SkillChildrenProps } from "@/types";

function Logo({ children }: SkillChildrenProps): React.JSX.Element {
  return <div>{children}</div>;
}

function Name({ children }: SkillChildrenProps): React.JSX.Element {
  return <h6 className="mt-0.5 text-xl font-medium">{children}</h6>;
}

function Description({ children }: SkillChildrenProps): React.JSX.Element {
  return <p>{children}</p>;
}

function Skill({ children, onClick }: SkillProps): React.JSX.Element {
  return (
    <>
      <div className="gap-2.5 border-b border-t border-gray-700 py-3 md:flex md:flex-col md:justify-between md:border-0">
        <div className="flex items-center gap-2.5">{children}</div>
        <div className="mt-2">
          <button onClick={onClick} className="group flex w-full items-center justify-center gap-2 rounded-full border border-secondary/60 px-2 py-1 hover:bg-secondary/70 hover:text-primary">
            Lihat Sumber Belajar <ArrowRight className="h-6 w-6 transition-transform duration-300 ease-linear group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </>
  );
}

Skill.Logo = Logo;
Skill.Name = Name;
Skill.Description = Description;

export default Skill;
