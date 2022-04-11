import { Link } from "react-router-dom";

export default function () {
  return (
    <ul className="nav">
      <li>
        <Link to={`/`} className="link">
          IStocks
        </Link>
      </li>
      <li>
        <Link to={`/stocks`} className="link">
          Stocks
        </Link>
      </li>
      <li>
        <Link to={`/about`} className="link">
          About
        </Link>
      </li>
    </ul>
  );
}
