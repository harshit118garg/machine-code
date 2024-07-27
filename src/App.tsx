import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Navbar from "./components/navbar";
import ErrorBoundary from "./components/errorBoundary";

const DragTasks = lazy(() => import("./apps/drag-tasks"));
const EmployRecords = lazy(() => import("./apps/employee-record"));
const ImgCarousel = lazy(() => import("./apps/img-carousel"));
const DFP = lazy(() => import("./apps/data-fetch-pagination"));
const Timeline = lazy(() => import("./apps/timeline"));
const ProgressBarApp = lazy(() => import("./apps/progress-bar"));
const SearchResultsApp = lazy(() => import("./apps/search-results"));
const GridLights = lazy(() => import("./apps/grid-lights"));
const LoadMore = lazy(() => import("./apps/load-more"));
const ReactSelect = lazy(() => import("./apps/react-select"));
const CardComp = lazy(() => import("./apps/card"));
const Todolist = lazy(() => import("./apps/todolist"));
const OTP = lazy(() => import("./apps/OTP"));
const Accordion = lazy(() => import("./apps/accordionComp"));
const TicTacToe = lazy(() => import("./apps/tic-tac-toe"));

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ErrorBoundary>
        <Suspense>
          <Routes>
            <Route path={"dragtasks"} element={<DragTasks />} />
            <Route path={"employeeRecords"} element={<EmployRecords />} />
            <Route path={"imgcarousel"} element={<ImgCarousel />} />
            <Route path={"dataFetchingPage"} element={<DFP />} />
            <Route path={"timeline"} element={<Timeline />} />
            <Route path={"progressbar"} element={<ProgressBarApp />} />
            <Route path={"searchresults"} element={<SearchResultsApp />} />
            <Route path={"gridlights"} element={<GridLights />} />
            <Route path={"loadmore"} element={<LoadMore />} />
            <Route path={"select"} element={<ReactSelect />} />
            <Route path={"card"} element={<CardComp />} />
            <Route path={"todolist"} element={<Todolist />} />
            <Route path={"otp"} element={<OTP />} />
            <Route path={"accordion"} element={<Accordion />} />
            <Route path={"tictactoe"} element={<TicTacToe />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
