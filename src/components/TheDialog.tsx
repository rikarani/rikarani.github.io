import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";

type Props = {
  stackname: string;
  isDialogOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

export default function TheDialog({ stackname, isDialogOpen, onClick, children }: Props): React.JSX.Element {
  return (
    <Transition appear show={isDialogOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClick as unknown as (value: boolean) => void}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-primary p-6 text-left align-middle text-gray-300 shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-semibold leading-6">
                  {stackname}
                </Dialog.Title>
                <div className="mt-4">{children}</div>

                <div className="mt-4 flex justify-end">
                  <Button variant="outline" className="bg-gray-100 text-gray-900" onClick={onClick}>
                    Tutup
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
