export interface AccordionContent {
  id: number;
  title: string;
  type: string;
  content: string;
}

export interface TabsContent {
  id: number;
  tabPaneTitle: string;
  tabPanel: {
    type: "text" | "image" | "headline";
    content: string | HeadlineContent;
  };
}

export type HeadlineContent = { size: number; headlineText: string };

export interface TabPaneProps {
  title: string;
  switchTab: () => void;
  activeTab: number;
  tabId: number;
}

type TabPanelContent = TabsContent["tabPanel"];

export interface TabPanelProps {
  panelTitle: string;
  panelContent: TabPanelContent;
  index: number;
  activeTab: number;
}
