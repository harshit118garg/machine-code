import "./App.scss";
import { Accordion, Navbar } from "./UI";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-blue-400">
        <Accordion />
      </main>
    </>
  );
}

export default App;
