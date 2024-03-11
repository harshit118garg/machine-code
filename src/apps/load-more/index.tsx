import { useEffect, useState } from "react";
import { staticData, BASEURL } from "./definations/constants";
import "./styles/index.scss";
import { JobBox } from "./components/JobBox";

export default function LoadMore() {
  const [jobIDList, setjobIDList] = useState(null);
  const [jobList, setjobList] = useState([staticData, staticData, staticData]);
  const [currentPage, setcurrentPage] = useState<number>(0);
  const [fetching, setFetching] = useState<boolean>(false);

  const fetchJobs = async (currPage: number) => {
    setcurrentPage(currPage);
    setFetching(true);
    let jobList = jobIDList;
    if (!jobIDList) {
      const res = await fetch(`${BASEURL}/jobstories.json`);
      const data = await res.json();
      setjobIDList(data);
    }

    const jobIDForPage = jobList;
  };

  useEffect(() => {
    if (currentPage === 0) fetchJobs(currentPage);
  }, []);

  return (
    <div className="load-more-container">
      <div className="wrapper">
        <div className="heading">
          <h2>Hacker News Jobs Board</h2>
        </div>
        <div className="job-list">
          {jobList.length > 1 ? (
            jobList.map((job) => {
              return <JobBox key={job.id} {...job} />;
            })
          ) : (
            <p className="loading">Loading.....</p>
          )}
        </div>
        <button className="load-more">Load More Jobs</button>
      </div>
    </div>
  );
}
