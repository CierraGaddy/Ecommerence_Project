// src/components/Filters.js
import React from "react";

function Filters({ onFilterChange }) {
  return (
    <div className="filters">
      <h3>Filters</h3>
      <label>
        Category:
        <select onChange={(e) => onFilterChange("category", e.target.value)}>
          <option value="all">All</option>
          <option value="Foundation">Foundation</option>
          <option value="Concealer">Concealer</option>
          <option value="Contouring Palette">Contouring Palette</option>
        </select>
      </label>
      <label>
        Price Range:
        <select onChange={(e) => onFilterChange("price", e.target.value)}>
          <option value="all">All</option>
          <option value="0-20">0 - 20</option>
          <option value="20-40">20 - 40</option>
          <option value="40-60">40 - 60</option>
        </select>
      </label>
    </div>
  );
}

export default Filters;
