import { useContext } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { DialogContext } from "@/context";

type Props = {
  skill: string;
  children: React.ReactNode;
};

export default function SumberBelajar({ skill, children }: Props): React.JSX.Element {
  const { dialogOpen, setDialogOpen } = useContext(DialogContext);

  return (
    <Dialog open={dialogOpen} handler={() => setDialogOpen(false)} className="divide-y bg-primary">
      <DialogHeader className="text-gray-300">{skill}</DialogHeader>
      <div>
        <DialogBody className="text-gray-300">{children}</DialogBody>
        <DialogFooter>
          <Button onClick={() => setDialogOpen(false)}>okok wakatta</Button>
        </DialogFooter>
      </div>
    </Dialog>
  );
}
