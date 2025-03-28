import React from "react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="dialog-search">
      <label className="dialog-controls-label">Search</label>
      <input
        type="text"
        className="search-input"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search elements..."
      />
    </div>
  );
};

export default SearchBar;
