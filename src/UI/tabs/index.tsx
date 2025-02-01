import { useState } from "react";
import { Container } from "../../shared";
import { tabsContent } from "../../static/dummyContent.json";
import { TabPane, TabPanel } from "./components";

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabSwitch = (_id: number) => setActiveTab(_id);

  return (
    <>
      <Container componentName="tabs">
        <div className="tabs flex flex-col gap-2 p-2 bg-white rounded-lg">
          <div className="pane-wrapper flex gap-2">
            {tabsContent.map((tab) => {
              return (
                <TabPane
                  key={tab.id}
                  title={tab.tabPaneTitle}
                  activeTab={activeTab}
                  tabId={tab.id}
                  switchTab={() => handleTabSwitch(tab.id)}
                />
              );
            })}
          </div>
          <div className="panel-wrapper">
            {tabsContent.map((tab) => {
              return (
                <TabPanel
                  key={tab.id}
                  panelTitle={tab.tabPaneTitle}
                  panelContent={tab.tabPanel}
                  index={tab.id}
                  activeTab={activeTab}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Tabs;
