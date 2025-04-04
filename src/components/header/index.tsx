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
        <li>
          <Link to={"/employeeRecords"}>
            <span>Employee Records</span>
          </Link>
        </li>
        <li>
          <Link to={"/imgcarousel"}>
            <span>Image Carousel</span>
          </Link>
        </li>
        <li>
          <Link to={"/dataFetchingPage"}>
            <span>Data Fetching App + Pagingation</span>
          </Link>
        </li>
        <li>
          <Link to={"/timeline"}>
            <span>TimeLine</span>
          </Link>
        </li>
        <li>
          <Link to={"/progressbar"}>
            <span>Progress Bar</span>
          </Link>
        </li>
        <li>
          <Link to={"/searchresults"}>
            <span>Search Results</span>
          </Link>
        </li>
        <li>
          <Link to={"/gridlights"}>
            <span>Grid Lights</span>
          </Link>
        </li>
        <li>
          <Link to={"/loadmore"}>
            <span>Load More</span>
          </Link>
        </li>
        <li>
          <Link to={"/select"}>
            <span>React Select</span>
          </Link>
        </li>
        <li>
          <Link to={"/card"}>
            <span>Card Comp</span>
          </Link>
        </li>
        <li>
          <Link to={"/todolist"}>
            <span>TODO List</span>
          </Link>
        </li>
        <li>
          <Link to={"/otp"}>
            <span>OTP Input</span>
          </Link>
        </li>
        <li>
          <Link to={"/accordion"}>
            <span>Accordion</span>
          </Link>
        </li>
        <li>
          <Link to={"/tictactoe"}>
            <span>TicTacToe</span>
          </Link>
        </li>
        <li>
          <Link to={"/memorygame"}>
            <span>Memory Game</span>
          </Link>
        </li>
        <li>
          <Link to={"/InfoGain"}>
            <span>Info Gain</span>
          </Link>
        </li>
        <li>
          <Link to={"/testing"}>
            <span>Testing</span>
          </Link>
        </li>
        <li>
          <Link to={"/autocomplete"}>
            <span>Auto-Complete</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
