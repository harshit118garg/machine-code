import "./App.scss";
import { CARS } from "./global/definations/constants";
import { AccordionContainer, Navbar, Tabs, Carousel } from "./UI";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-blue-800">
        <Carousel slides={CARS} autoplay={false} />
        <Carousel slides={CARS} autoplay={false} vertical />
        <AccordionContainer />
        <Tabs />
        {/* <Teaser /> */}
      </main>
    </>
  );
}

export default App;
