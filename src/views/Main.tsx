import { useState } from "react";
import { TabContext } from "@/context";
import type { Tab } from "@/types";

import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Layout from "@/components/Layout";

function Main(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<Tab>("Profile");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <Navbar />
      <Layout>
        {activeTab === "Profile" ? <Profile /> : null}
        {activeTab === "Skill" ? <Skills /> : null}
        {activeTab === "Project" ? <Projects /> : null}
        {activeTab === "Website Ini?" ? <About /> : null}
      </Layout>
    </TabContext.Provider>
  );
}

export default Main;
