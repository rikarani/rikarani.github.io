import { useState } from "react";
import { TabContext } from "../context";
import type { Tab } from "../types";

import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";

function Home(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<Tab>("Profile");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <Navbar />
      <main className="flex-1 bg-slate-900 bg-beams-7 bg-center px-4 pt-4 md:px-6">
        {activeTab === "Profile" ? <Profile /> : null}
        {activeTab === "Skill" ? <Skills /> : null}
        {activeTab === "Project" ? <Projects /> : null}
        {activeTab === "Website Ini?" ? <About /> : null}
      </main>
    </TabContext.Provider>
  );
}

export default Home;
