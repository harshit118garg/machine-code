// import { TabPaneProps } from "../../../global/definations/types";

// export const TabPane: React.FC<TabPaneProps> = ({
//   title,
//   switchTab,
//   activeTab,
//   tabId,
// }) => {
//   return (
//     <button
//       className={`tab-pane px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
//         activeTab === tabId
//           ? "bg-white text-black shadow-md"
//           : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800"
//       }`}
//       onClick={switchTab}
//     >
//       {title}
//     </button>
//   );
// };

import { TabPaneProps } from "../../../global/definations/types";
import { useState, useEffect, useRef } from 'react';

export const TabPane: React.FC<TabPaneProps> = ({
  title,
  switchTab,
  activeTab,
  tabId,
}) => {
  const [isUnderlineActive, setIsUnderlineActive] = useState(false);
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (activeTab === tabId) {
      setIsUnderlineActive(true);
      if (underlineRef.current) {
        underlineRef.current.style.width = '100%'; 
      }
    } else {
      setIsUnderlineActive(false);
      if (underlineRef.current) {
        underlineRef.current.style.width = '0%'; 
      }
    }
  }, [activeTab, tabId]);

  return (
    <button
      className={`relative tab-pane flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
        activeTab === tabId
          ? 'bg-white text-black shadow-md'
          : 'text-gray-600 hover:text-gray-800'
      }`}
      onClick={switchTab}
    >
      <span className="flex-grow">{title}</span>
      <span
        ref={underlineRef}
        className={`absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 ease-in-out ${
          isUnderlineActive ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </button>
  );
};