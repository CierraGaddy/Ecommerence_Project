// src/components/Filters.js
import React from "react"; // Import React since this is a functional component

// Filters component - helps users filter products based on category and price
function Filters({ onFilterChange }) {
  //filterchange prop to return the change selected by user
  return (
    <div className="filters">
      <h3>Filters</h3>

      {/* Dropdown to select a category */}
      <label>
        Category:
        <select onChange={(e) => onFilterChange("category", e.target.value)}>
          {" "}
          {/* Evwnt target to identify filter */}
          <option value="all">All</option>{" "}
          {/* Default option to show all products */}
          <option value="Foundation">Foundation</option>
          <option value="Concealer">Concealer</option>
          <option value="Contouring Palette">Contouring Palette</option>
        </select>
      </label>

      {/* Dropdown to select a price range */}
      <label>
        Price Range:
        <select onChange={(e) => onFilterChange("price", e.target.value)}>
          <option value="all">All</option>{" "}
          {/* Default option to show all prices */}
          <option value="0-20">0 - 20</option>{" "}
          {/* Filters products in the $0-$20 range */}
          <option value="20-40">20 - 40</option>{" "}
          {/* Filters products in the $20-$40 range */}
          <option value="40-60">40 - 60</option>{" "}
          {/* Filters products in the $40-$60 range */}
        </select>
      </label>
    </div>
  );
}

export default Filters; // Export the Filters component so it can be used in other parts of the app
