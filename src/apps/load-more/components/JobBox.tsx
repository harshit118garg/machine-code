import { JobBoxProps } from "../definations/types";

export function JobBox({ by, time, title, url }: JobBoxProps) {
  return (
    <div className="job-box-wrapper">
      <h3>
        {url ? (
          <a href={url} rel="noopener" target="_blank">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <div>
        <p>
          By {by} * {new Date(time).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
