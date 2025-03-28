import React from "react";
import { FilterOption } from "../types/types";
import { filterOptions } from "../data/mockData";

interface FilterDropdownProps {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const filter = filterOptions.find(
      (option) =>
        option.value ===
        (selectedValue === "null" ? null : parseInt(selectedValue))
    );

    if (filter) {
      onFilterChange(filter);
    }
  };

  return (
    <div className="dialog-filter">
      <label className="dialog-controls-label">Filter</label>
      <select
        className="filter-select"
        value={activeFilter.value === null ? "null" : activeFilter.value}
        onChange={handleChange}
      >
        {filterOptions.map((option) => (
          <option
            key={option.label}
            value={option.value === null ? "null" : option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
