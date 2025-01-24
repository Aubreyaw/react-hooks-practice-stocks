import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Stock from "./Stock";
import PortfolioContainer from "./PortfolioContainer";
import StockContainer from "./StockContainer";

const stocksApi = "http://localhost:3001/stocks";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const removeStock = (id) => {
    const stockToRemove = portfolio.find(stock => stock.id === id);
    setPortfolio(portfolio.filter(stock => stock.id !== id));
    setStocks([...stocks, stockToRemove]); 
  };

  const addStock = (id) => {
    const stockToAdd = stocks.find(stock => stock.id === id);
    if (!portfolio.includes(stockToAdd)) {
    setPortfolio([...portfolio, stockToAdd]);
    setStocks(stocks.filter(stock => stock.id !== id));
    }
  };

  useEffect(() => {
    fetch(stocksApi)
    .then(response => response.json())
    .then(data => setStocks(data))
    .catch(error => console.error("Error fetching stocks:", error))
  }, [])

  const filterStocks = (stocks, filterBy) => {
    if (!filterBy) return stocks;
    return stocks.filter(stock => stock.type === filterBy);
  };

  const sortStocks = (stocks, sortBy) => {
    if (sortBy === "Alphabetically") {
      return [...stocks].sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (sortBy === "Price") {
      return [...stocks].sort((a, b) => a.price -b.price);
    }
    return stocks;
  };

  const getFilteredAndSortedStocks = () => {
    const filteredStocks = filterStocks(stocks, filterBy);
    return sortStocks(filteredStocks, sortBy);
  };

  return (
    <div>
      <Header />
      <MainContainer 
        stocks={getFilteredAndSortedStocks()}
        portfolio={portfolio}
        addStock={addStock}
        removeStock={removeStock}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
    </div>
  );

}
export default App;

/*
Render all the stocks onto the page. The styling of how a Stock should look like is already in the Stock component.
stock list render in StockContainer
fetch stocks
render stocks as cards use for each

Allow a user to buy a stock by clicking on it and when it is bought, it should be added to MyPortfolio.
render MyPortfolio in PortfolioContainer

Allow a user to sell a stock in their Portfolio by clicking on the stock and it should be removed from their Portfolio.
The stock name is the clickable element, no button

Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.

Allow a user to filter stocks based on the type of the stock.


"stocks": [
    {
      "id": 1,
      "ticker": "GOOG",
      "name": "Google",
      "type": "Tech",
      "price": 1194.8
    },

*/