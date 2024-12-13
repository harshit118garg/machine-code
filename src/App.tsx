import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Navbar from "./components/navbar";
import ErrorBoundary from "./components/errorBoundary";

const DragTasks = lazy(() => import("./apps/drag-tasks"));

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ErrorBoundary>
        <Suspense>
          <Routes>
            <Route path={"dragtasks"} element={<DragTasks />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
