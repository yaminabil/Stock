import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import stocks from "../data";

export default function Stock() {
  const [stock, setStock] = useState(0);
  const { symbol } = useParams();
  const findBySymbol = () => {
    setStock(
      stocks.find((ele) => {
        return ele.symbol === symbol;
      })
    );
  };
  useEffect(() => {
    findBySymbol();
  }, []);

  return (
    <div className="stock">
      <h1>Name : {stock.name}</h1>
      <h1> Price : {stock.lastPrice}</h1>
    </div>
  );
}
