import { useState } from "react";
import { Link } from "react-router-dom";

//Dashboard function starts from here
export default function Dashboard(props) {
  //declaring variables
  const stocks = props.stocks;
  const getStock = props.getStock;
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClick = () => {
    getStock(value);
  };

  return (
    <div className="dashboard">
      <h1>All the Stocks</h1>
      <input onChange={handleChange} type="text" />
      <button onClick={handleClick}>search</button>
      <ul>
        {stocks.length > 1 ? (
          <ul>
            {stocks.map((ele) => {
              return (
                <Link to={`/stocks/${ele.symbol}`} className="link">
                  <li key={ele._id}> {ele.name} </li>
                </Link>
              );
            })}
          </ul>
        ) : (
          <ul>
            <Link to={`/stocks/${stocks[0].symbol}`} className="link">
              <li>{stocks[0].name}</li>
            </Link>
          </ul>
        )}
      </ul>
    </div>
  );
}
