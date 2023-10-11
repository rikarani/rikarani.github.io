import { useContext } from "react";
import { DialogContext } from "@/context";
import { Button } from "@/components/ui/button";

type Props = {
  logo: React.ReactNode;
  children: React.ReactNode;
};

type WrapperProps = Pick<Props, "children">;

function Wrapper({ children }: WrapperProps): React.JSX.Element {
  return <div className="divide-y divide-gray-300 border-gray-300 md:grid md:grid-cols-2 md:gap-x-6 md:divide-y-0 lg:grid-cols-3">{children}</div>;
}

function Skill({ logo, children }: Props): React.JSX.Element {
  const { setIsDialogOpen } = useContext(DialogContext);

  return (
    <div className="py-4 last:pb-0 lg:pb-0">
      <div className="flex items-center gap-3">
        <div>{logo}</div>
        <div className="text-gray-300">{children}</div>
      </div>
      <div className="mt-3">
        <Button onClick={() => setIsDialogOpen(true)} className="w-full text-lg font-semibold hover:bg-transparent hover:text-gray-300" variant="outline">
          Klik Saya Juga
        </Button>
      </div>
    </div>
  );
}

Skill.Wrapper = Wrapper;
Skill.Item = Skill;

export default Skill;
