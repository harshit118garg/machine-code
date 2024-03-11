import car from "./assets/car1.jpg";
import "./styles/styles.scss";

export default function CardComp() {
  // throw new Error("error in card component");

  return (
    <div>
      <div className="card-container">
        <div className="wrapper-div">
          <div className="card-wrapper">
            <div className="img-wrapper">
              <img src={car} alt="car-1" />
            </div>
            <div className="card-body">
              <div className="card-title">Cafe Badilico</div>
              <div className="card-sub-head">
                $ . Italian, Cafe
                <div className="card-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, debitis?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
