import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/partials/svg";

type Props = {
  logo: React.ReactNode;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Wrapper({ children }: Pick<Props, "children">): React.JSX.Element {
  return <div className="divide-y divide-gray-300 border-gray-300 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:divide-y-0 lg:grid-cols-3 lg:gap-y-4">{children}</div>;
}

function Skill({ logo, children, onClick }: Props): React.JSX.Element {
  return (
    <div className="py-4 lg:pb-0">
      <div className="flex items-center gap-3">
        <div>{logo}</div>
        <div className="text-gray-300">{children}</div>
      </div>
      <div className="mt-3">
        <Button onClick={onClick} className="group flex w-full items-center gap-2.5 rounded-full text-lg font-semibold hover:bg-transparent hover:text-gray-300" variant="outline">
          Lihat Sumber Belajar <ArrowRight className="h-6 w-6 transition-transform duration-200 ease-linear group-hover:translate-x-1 group-hover:stroke-gray-300" />
        </Button>
      </div>
    </div>
  );
}

Skill.Wrapper = Wrapper;
Skill.Item = Skill;

export default Skill;
