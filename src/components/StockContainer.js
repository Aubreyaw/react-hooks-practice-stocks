import React from "react";
import Stock from "./Stock";


function StockContainer({ stocks, addStock }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => (
        <Stock 
        key={stock.id} 
        id={stock.id}
        ticker={stock.ticker}
        name={stock.name} 
        type={stock.type}
        price={stock.price} 
        addStock={addStock}
        />
      ))}
    </div>
  );
}

export default StockContainer;

// "stocks": [
//     {
//       "id": 1,
//       "ticker": "GOOG",
//       "name": "Google",
//       "type": "Tech",
//       "price": 1194.8
//     },
