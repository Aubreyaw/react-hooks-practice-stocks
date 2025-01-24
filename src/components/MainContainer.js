import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, portfolio, addStock, removeStock, sortBy, setSortBy, filterBy, setFilterBy }) {
  return (
    <div>
      <SearchBar
      sortBy={sortBy}
      setSortBy={setSortBy}
      filterBy={filterBy}
      setFilterBy={setFilterBy} 
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addStock={addStock}/>
        </div>
        <div className="col-4">
        <PortfolioContainer portfolio={portfolio} removeStock={removeStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;


