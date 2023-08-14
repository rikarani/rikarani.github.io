import { useState } from "react";
import { useTransition, animated, easings } from "@react-spring/web";
import { HTML5Logo, RightArrow } from "./Logo";

interface SkillCardProps {
  stackName: string;
}

export default function SkillCard({ stackName }: SkillCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dialogTransition = useTransition(isModalOpen, {
    from: { opacity: 0, top: "-100%" },
    enter: { opacity: 1, top: "0", duration: 700 },
    leave: { opacity: 0, top: "-100%", duration: 300 },
    config: { easing: easings.easeInOutElastic },
  });

  return (
    <>
      <div className="gap-2.5 border-b border-t border-gray-700 py-2">
        <div className="flex gap-2.5">
          <HTML5Logo className="h-20 w-20 fill-[#E34F26]" />
          <div>
            <h6 className="mt-0.5 text-xl font-medium">{stackName}</h6>
            <p>HyperText Markup Language. Dari sinilah semuanya berawal</p>
          </div>
        </div>
        <div className="mt-2">
          <button onClick={() => setIsModalOpen(true)} className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#E34F26] px-2 py-1">
            Cek Sumber Belajar <RightArrow className="h-6 w-6 transition-transform duration-300 ease-linear group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      {dialogTransition((style, item) => {
        return (
          item && (
            <animated.div style={style} className="fixed inset-0 flex items-center bg-black/50" onClick={() => setIsModalOpen(false)}>
              <h1>pala bapakkau</h1>
            </animated.div>
          )
        );
      })}
    </>
  );
}
