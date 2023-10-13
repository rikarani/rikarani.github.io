import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/partials/svg";

type Props = {
  logo: React.ReactNode;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

type WrapperProps = Pick<Props, "children">;

function Wrapper({ children }: WrapperProps): React.JSX.Element {
  return <div className="divide-y divide-gray-300 border-gray-300 md:grid md:grid-cols-2 md:gap-x-6 md:divide-y-0 lg:grid-cols-3">{children}</div>;
}

function Skill({ logo, children, onClick }: Props): React.JSX.Element {
  return (
    <div className="py-4 last:pb-0 lg:pb-0">
      <div className="flex items-center gap-3">
        <div>{logo}</div>
        <div className="text-gray-300">{children}</div>
      </div>
      <div className="mt-3">
        <Button onClick={onClick} className="group flex w-full items-center gap-2.5 rounded-full text-lg font-semibold hover:bg-transparent hover:text-gray-300" variant="outline">
          Lihat Sumber Belajar <ArrowRight className="h-6 w-6 transition-transform duration-200 ease-linear group-hover:translate-x-1.5 group-hover:stroke-gray-300" />
        </Button>
      </div>
    </div>
  );
}

Skill.Wrapper = Wrapper;
Skill.Item = Skill;

export default Skill;
