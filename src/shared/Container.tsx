import { ReactNode } from "react";

interface ContainerProps {
  componentName: string;
  children: ReactNode;
}

export default function Container({ componentName, children }: ContainerProps) {
  return (
    <div className="container container-wrapper">
      <h2 className="text-white uppercase font-bold">{componentName}</h2>
      <div className="wrapper p-4 rounded-xl">{children}</div>
    </div>
  );
}
