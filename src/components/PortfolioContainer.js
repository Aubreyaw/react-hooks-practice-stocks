import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, removeStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(stock => (
        <Stock 
          key={stock.id} 
          id={stock.id}
          ticker={stock.ticker}
          name={stock.name} 
          type={stock.type}
          price={stock.price} 
          removeStock={removeStock}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
