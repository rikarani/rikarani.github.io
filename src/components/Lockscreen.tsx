import Konten from "./partials/Lockscreen/Konten";

function Lockscreen(): React.JSX.Element {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* background image */}
      <div className="relative h-full w-full bg-hp bg-cover bg-center before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black/[0.45] before:content-[''] sm:bg-desktop sm:bg-center"></div>
      {/* background image */}

      <Konten />
    </div>
  );
}

export default Lockscreen;
