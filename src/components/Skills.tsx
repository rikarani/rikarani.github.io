import SkillCard from "./partials/SkillCard";

export default function Skills(): React.JSX.Element {
  return (
    <div className="text-slate-300">
      <h6 className="text-4xl font-semibold">Skills</h6>
      <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, atque.</h6>

      <div className="mt-4">
        <SkillCard stackName="HTML" />
      </div>
    </div>
  );
}
