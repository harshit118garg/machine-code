import { Timeline_data_type } from "../../constants/timeline-types";
import "./styles/index.scss";

interface CardProperties {
  id: number;
  cardData: Timeline_data_type;
}

export default function Card({ cardData, id }: CardProperties) {
  const { from, title, year, percentage } = cardData;

  const translateValue = `translateY(${-100 * id}%)`;

  return (
    <div className="card" style={{ transform: translateValue }}>
      <div className="card-details">
        <div className="row year">
          <p>Year : </p>
          <p>{year}</p>
        </div>
        <div className="row title">
          <p>Title : </p>
          <p>{title}</p>
        </div>
        <div className="row from">
          <p>Organization : </p>
          <p>{from}</p>
        </div>
        <div className="row percentage">
          <p>Score : </p>
          <p>{percentage}</p>
        </div>
      </div>
    </div>
  );
}
