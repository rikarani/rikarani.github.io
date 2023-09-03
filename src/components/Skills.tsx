import { useState, useMemo, Fragment } from "react";
import { SkillList as skills } from "@/config/SkillList";
import { DialogContext } from "@/context";

import Skill from "./partials/Skill";
import SumberBelajar from "./SumberBelajar";
import Link from "./partials/Link";
import { ArrowUp } from "./partials/svg";

export default function Skills(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [skill, setSkill] = useState<string>("");
  const links = useMemo(() => skills.filter(({ stackname }) => stackname === skill), [skill]);

  const [disclosures, setDisclosures] = useState([
    {
      id: "Valid Skill",
      pemanis: "pick me up, give me hope, let me say one more word",
      open: true,
      buttonText: "Rill",
      panelText: skills.filter(({ isValid }) => isValid),
    },
    {
      id: "Invalid Skill",
      pemanis: "mungkin suatu hari nanti ini semua bakal pindah ke atas",
      open: false,
      buttonText: "Wishlist?",
      panelText: skills.filter(({ isValid }) => !isValid),
    },
  ]);

  const handleClick = (id: string) => {
    setDisclosures(disclosures.map((d) => (d.id === id ? { ...d, open: !d.open } : { ...d, open: false })));
  };

  return (
    <div className="text-slate-300">
      <h6 className="text-4xl font-semibold">Skills</h6>
      <h6>ama sumber belajarnya juga</h6>

      <div className="mt-4">
        <DialogContext.Provider value={{ isOpen, setIsOpen }}>
          {disclosures.map(({ id, pemanis, open, buttonText, panelText }) => {
            return (
              <Fragment key={id}>
                <button className={`flex w-full items-center justify-between text-secondary ${id === "Invalid Skill" ? "mt-2" : undefined}`} onClick={() => handleClick(id)}>
                  <p className="text-lg font-medium">{buttonText}</p>
                  <ArrowUp className={`h-6 w-6 transition-all duration-300 ease-in-out ${open ? "rotate-180" : undefined}`} />
                </button>
                {open && (
                  <div>
                    <p className="mb-1">{pemanis}</p>
                    {panelText.map(({ stackname, description, logo }) => {
                      function handleClick() {
                        setIsOpen(true);
                        setSkill(stackname);
                      }

                      return (
                        <Skill key={stackname} onClick={handleClick}>
                          <Skill.Logo>{logo}</Skill.Logo>
                          <div>
                            <Skill.Name>{stackname}</Skill.Name>
                            <Skill.Description>{description}</Skill.Description>
                          </div>
                        </Skill>
                      );
                    })}
                  </div>
                )}
              </Fragment>
            );
          })}

          <SumberBelajar skill={skill}>
            <ol className="list-inside list-['-_'] space-y-1">
              {links[0]?.sumberBelajar.map(({ link, nama }) => {
                return (
                  <li key={nama}>
                    <Link to={link}>{nama}</Link>
                  </li>
                );
              })}
            </ol>
          </SumberBelajar>
        </DialogContext.Provider>
      </div>
    </div>
  );
}
