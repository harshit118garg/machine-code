import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Navbar from "./components/navbar";

const DragTasks = lazy(() => import("./apps/drag-tasks"));
const EmployRecords = lazy(() => import("./apps/employee-record"));
const ImgCarousel = lazy(() => import("./apps/img-carousel"));
const DFP = lazy(() => import("./apps/data-fetch-pagination"));
const Timeline = lazy(() => import("./apps/timeline"));
const ProgressBarApp = lazy(() => import("./apps/progress-bar"));
const SearchResultsApp = lazy(() => import("./apps/search-results"));

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Suspense>
        <Routes>
          <Route path={"dragtasks"} element={<DragTasks />} />
          <Route path={"employeeRecords"} element={<EmployRecords />} />
          <Route path={"imgcarousel"} element={<ImgCarousel />} />
          <Route path={"dataFetchingPage"} element={<DFP />} />
          <Route path={"timeline"} element={<Timeline />} />
          <Route path={"progressbar"} element={<ProgressBarApp />} />
          <Route path={"searchresults"} element={<SearchResultsApp />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
