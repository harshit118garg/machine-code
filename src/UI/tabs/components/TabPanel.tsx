import { TabPanelProps } from "../../../global/definations/types";
import { Headline, Image } from "../../../shared";

export const TabPanel: React.FC<TabPanelProps> = ({
  panelContent,
  activeTab,
  index,
  panelTitle,
}) => {
  const renderContent = () => {
    const { content, type } = panelContent;

    if (typeof content === "object") {
      if (type === "headline") {
        return <Headline {...content} />;
      }
    }

    if (typeof content === "string") {
      if (type === "image") {
        return (
          <div className="w-full aspect-w-16 aspect-h-9 image-wrapper">
            <Image
              alt={panelTitle}
              src={content}
              className="w-full h-full object-contain"
            />
          </div>
        );
      }

      if (type === "text") {
        return (
          <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
        );
      }
    }
  };

  return activeTab === index ? (
    <div className="tab-panel">{renderContent()}</div>
  ) : null;
};
