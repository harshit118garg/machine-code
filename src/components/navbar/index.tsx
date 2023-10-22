import { Link } from "react-router-dom";
import "./styles/index.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>Machine Coding</Link>
      </div>
    </nav>
  );
}
