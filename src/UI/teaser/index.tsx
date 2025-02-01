import { Container } from "../../shared";
import CardTeaser from "./components/CardTeaser";

export default function Teaser() {
  return (
    <>
      <Container componentName="teaser">
        <div id="card-teaser" className="p-4">
          <CardTeaser
            title={"testing"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quia quibusdam? Error enim recusandae ratione id nam, sit aliquam iure!"
            }
            imageUrl={
              "https://images.pexels.com/photos/7887723/pexels-photo-7887723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            linkUrl={"https://www.google.com"}
          />
        </div>
      </Container>
    </>
  );
}
