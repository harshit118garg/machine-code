import { Link } from "react-router-dom";
import "./styles/index.scss";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/dragtasks"}>
            <span>Done & Undone Tasks</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
