import { useState } from "react";
import { TabContext } from "../context";
import type { Tab } from "../types";

import Navbar from "../components/Navbar";

function Home(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<Tab>("Profile");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <Navbar />
    </TabContext.Provider>
  );
}

export default Home;
