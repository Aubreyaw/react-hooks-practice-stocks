import React from "react";

function Stock({ id, ticker, name, type, price, addStock, removeStock }) {
  const handleClick = () => {
    if (addStock) {
      console.log("Adding stock with ID:", id);
      addStock(id);
    } else if (removeStock) {
      console.log("Removing stock with ID:", id);
      removeStock(id);
    }
  };

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: ${price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

// "stocks": [
//     {
//       "id": 1,
//       "ticker": "GOOG",
//       "name": "Google",
//       "type": "Tech",
//       "price": 1194.8
//     },