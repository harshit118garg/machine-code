import { JSX } from "react";
import { HeadlineContent } from "../global/definations/types";

function Headline({ size, headlineText }: HeadlineContent) {
  const HeadingTag = `h${size}` as keyof JSX.IntrinsicElements;
  return (
    <div className="headline-wrapper">
      <HeadingTag>{headlineText}</HeadingTag>
    </div>
  );
}

export default Headline;
