import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Navbar from "./components/navbar";

const DragTasks = lazy(() => import("./apps/drag-tasks"));
const EmployRecords = lazy(() => import("./apps/employee-record"));
const ImgCarousel = lazy(() => import("./apps/img-carousel"));
const DFP = lazy(() => import("./apps/data-fetch-pagination"));

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
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
