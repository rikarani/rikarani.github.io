import { useState, useMemo } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { SkillList as skills } from "@/config/SkillList";
import { ArrowUp } from "./partials/svg";
import { DialogContext } from "@/context";

import Skill from "./partials/Skill";
import SumberBelajar from "./SumberBelajar";

export default function Skills(): React.JSX.Element {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [accordion, setAccordion] = useState<number>(1);
  const [activeSkill, setActiveSkill] = useState<string>("");

  const validSkills = skills.filter(({ isValid }) => isValid);
  const wishlist = skills.filter(({ isValid }) => !isValid);
  const links = useMemo(() => skills.filter(({ stackname }) => stackname === activeSkill), [activeSkill])[0]?.sumberBelajar;

  return (
    <div className="text-gray-300">
      <h6 className="text-4xl font-semibold">Skills</h6>
      <h6>ama sumber belajarnya juga</h6>

      <div className="mt-4">
        <Accordion open={accordion === 1} icon={<ArrowUp className={`h-6 w-6 stroke-gray-300 transition-all duration-150 ease-linear ${accordion === 1 ? "rotate-180" : undefined}`} />}>
          <AccordionHeader onClick={() => setAccordion((prev) => (prev === 1 ? 0 : 1))} className="text-gray-300 hover:text-gray-300">
            Benar
          </AccordionHeader>
          <AccordionBody className="flex flex-col gap-4 text-gray-300 md:grid md:grid-cols-3 md:gap-6">
            {validSkills.map(({ logo, stackname, description }) => {
              function handleClick() {
                setActiveSkill(stackname);
                setDialogOpen(true);
              }

              return (
                <Skill key={stackname} logo={logo} onClick={handleClick}>
                  <h3 className="text-lg font-semibold">{stackname}</h3>
                  <h5 className="text-lg">{description}</h5>
                </Skill>
              );
            })}
          </AccordionBody>
        </Accordion>
        <Accordion open={accordion === 2} icon={<ArrowUp className={`h-6 w-6 stroke-gray-300 transition-all duration-150 ease-linear ${accordion === 2 ? "rotate-180" : undefined}`} />}>
          <AccordionHeader onClick={() => setAccordion((prev) => (prev === 2 ? 0 : 2))} className="text-gray-300 hover:text-gray-300">
            Wishlist
          </AccordionHeader>
          <AccordionBody className="flex flex-col gap-4 text-gray-300 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-8">
            {wishlist.map(({ logo, stackname, description }) => {
              function handleClick() {
                setActiveSkill(stackname);
                setDialogOpen(true);
              }

              return (
                <Skill key={stackname} logo={logo} onClick={handleClick}>
                  <h3 className="text-lg font-semibold">{stackname}</h3>
                  <h5 className="text-lg">{description}</h5>
                </Skill>
              );
            })}
          </AccordionBody>
        </Accordion>
      </div>

      <DialogContext.Provider value={{ dialogOpen, setDialogOpen }}>
        <SumberBelajar skill={activeSkill}>
          <ol className="list-inside list-decimal space-y-1">
            {links?.map(({ nama, link }) => {
              return (
                <li key={nama}>
                  <a href={link}>{nama}</a>
                </li>
              );
            })}
          </ol>
        </SumberBelajar>
      </DialogContext.Provider>
    </div>
  );
}
