import "./App.scss";
import { AccordionContainer, Navbar, Tabs, Teaser } from "./UI";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-blue-800">
        <AccordionContainer />
        <Tabs />
        {/* <Teaser /> */}
      </main>
    </>
  );
}

export default App;
