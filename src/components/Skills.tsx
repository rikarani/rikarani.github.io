import { useState, useMemo } from "react";
import { SkillList as skills } from "@/config/SkillList";
import { DialogContext, SkillContext } from "@/context";
import { Disclosure } from "@headlessui/react";

import Skill from "./partials/Skill";
import SumberBelajar from "./SumberBelajar";
import Link from "./partials/Link";
import { ArrowUp } from "./partials/svg";

export default function Skills(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [skill, setSkill] = useState<string>("");
  const validSkills = skills.filter((v) => v.isValid);
  const links = useMemo(() => skills.filter(({ stackname }) => stackname === skill), [skill]);

  return (
    <div className="text-slate-300">
      <h6 className="text-4xl font-semibold">Skills</h6>
      <h6>Stack yang biasa ku pakek, ama sumber belajarnya juga</h6>

      <div className="mt-4">
        <DialogContext.Provider value={{ isOpen, setIsOpen }}>
          <SkillContext.Provider value={{ skill, setSkill }}>
            <Disclosure defaultOpen>
              {({ open }) => {
                return (
                  <>
                    <Disclosure.Button className={`mb-2 flex w-full items-center justify-between text-secondary`}>
                      <p className="text-lg font-medium">lorem ipsum dolor sit amet</p>
                      <ArrowUp className={`h-6 w-6 transition-all duration-300 ease-in-out ${open ? "rotate-180" : undefined}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="md:grid md:grid-cols-3 md:gap-6">
                      {validSkills.map(({ stackname, description, logo }) => {
                        return <Skill key={stackname} stackname={stackname} description={description} logo={logo} />;
                      })}
                    </Disclosure.Panel>
                  </>
                );
              }}
            </Disclosure>

            <SumberBelajar skill={skill}>
              <ol className="list-inside list-['-_'] space-y-1">
                {links[0]?.sumberBelajar.map(({ nama, link }) => {
                  return (
                    <li key={nama}>
                      <Link to={link}>{nama}</Link>
                    </li>
                  );
                })}
              </ol>
            </SumberBelajar>
          </SkillContext.Provider>
        </DialogContext.Provider>
      </div>
    </div>
  );
}
