import "./App.scss";
import { AccordionContainer, Navbar } from "./UI";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-blue-800">
        <AccordionContainer />
      </main>
    </>
  );
}

export default App;
