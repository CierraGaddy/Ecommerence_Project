import React from "react";

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div className="filters">
      <h3>Filters</h3>

      {/* Category Filter */}
      <label>
        Category:
        <select
          name="category"
          value={filters.category}
          onChange={onFilterChange}
        >
          <option value="">All Categories</option>
          <option value="Foundation">Foundation</option>
          <option value="Concealer">Concealer</option>
          <option value="Contouring Palette">Contouring Palette</option>
        </select>
      </label>

      {/* Min Price Filter */}
      <label>
        Min Price:
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={onFilterChange}
          placeholder="0"
        />
      </label>

      {/* Max Price Filter */}
      <label>
        Max Price:
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={onFilterChange}
          placeholder="100"
        />
      </label>
    </div>
  );
};

export default Filters;
