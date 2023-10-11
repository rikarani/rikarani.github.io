import { Fragment, useState } from "react";
import { SkillList as skill } from "@/config/SkillList";
import { DialogContext } from "@/context";

import { Transition, Dialog } from "@headlessui/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Skill from "./partials/Skill";

export default function Skills(): React.JSX.Element {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const fav = skill.filter(({ fav }) => fav);
  const notFav = skill.filter(({ fav }) => !fav);

  return (
    <DialogContext.Provider value={{ isDialogOpen, setIsDialogOpen }}>
      <div className="text-gray-300">
        <h1 className="text-3xl font-medium lg:text-4xl">Skills</h1>
        <h6 className="bg-gradient-to-r from-sky-500 to-sky-300 bg-clip-text text-2xl font-semibold text-transparent">Dan Sumber Belajarnya</h6>
      </div>

      <div className="text-gray-300">
        <Accordion type="single" defaultValue="fav" collapsible>
          <AccordionItem value="fav">
            <AccordionTrigger className="border-b border-gray-300 stroke-gray-300 text-xl font-semibold hover:no-underline">Stuck Kesayangan</AccordionTrigger>
            <AccordionContent>
              <Skill.Wrapper>
                {fav.map(({ logo, stackname, description }) => {
                  return (
                    <Skill.Item key={stackname} logo={logo}>
                      <h6 className="text-xl font-semibold">{stackname}</h6>
                      <p className="text-base font-medium">{description}</p>
                    </Skill.Item>
                  );
                })}
              </Skill.Wrapper>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="wishlist">
            <AccordionTrigger className="border-b border-gray-300 stroke-gray-300 text-xl font-semibold hover:no-underline">Wishlist Stuck</AccordionTrigger>
            <AccordionContent>
              <Skill.Wrapper>
                {notFav.map(({ logo, stackname, description }) => {
                  return (
                    <Skill.Item key={stackname} logo={logo}>
                      <h6 className="text-xl font-semibold">{stackname}</h6>
                      <p className="text-base font-medium">{description}</p>
                    </Skill.Item>
                  );
                })}
              </Skill.Wrapper>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Transition appear show={isDialogOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => setIsDialogOpen(false)}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.</p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </DialogContext.Provider>
  );
}
