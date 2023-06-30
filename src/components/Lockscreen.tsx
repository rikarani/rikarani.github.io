import React, { useState } from "react";

import Konten from "./partials/Lockscreen/Konten";
import LazyImage from "./partials/Lockscreen/LazyImage";

function Lockscreen(): React.JSX.Element {
  const [ready, setReady] = useState<boolean>(true);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* background image */}
      <LazyImage setReady={setReady} />
      {/* background image */}

      {ready && <Konten />}
    </div>
  );
}

export default Lockscreen;
