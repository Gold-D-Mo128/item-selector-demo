import React from "react";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import ItemsList from "./ItemsList";
import SelectedItemsList from "./SelectedItemsList";
import { Item, FilterOption } from "../types/types";
import { X } from "lucide-react";

interface SelectionDialogProps {
  isOpen: boolean;
  filteredItems: Item[];
  tempSelectedItems: Item[];
  searchQuery: string;
  activeFilter: FilterOption;
  onClose: () => void;
  onSave: () => void;
  onItemToggle: (item: Item) => void;
  onRemoveItem: (itemId: number) => void;
  onSearchChange: (query: string) => void;
  onFilterChange: (filter: FilterOption) => void;
}

const SelectionDialog: React.FC<SelectionDialogProps> = ({
  isOpen,
  filteredItems,
  tempSelectedItems,
  searchQuery,
  activeFilter,
  onClose,
  onSave,
  onItemToggle,
  onRemoveItem,
  onSearchChange,
  onFilterChange,
}) => {
  if (!isOpen) return null;

  // Prevent click propagation from dialog to overlay
  const handleDialogClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-container" onClick={handleDialogClick}>
        <div className="dialog-header">
          <h2 className="dialog-title">Select items</h2>
          <button
            type="button"
            className="close-dialog-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X />
          </button>
        </div>

        <div className="dialog-controls">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
          />

          <FilterDropdown
            activeFilter={activeFilter}
            onFilterChange={onFilterChange}
          />
        </div>

        <ItemsList
          items={filteredItems}
          selectedItems={tempSelectedItems}
          onItemToggle={onItemToggle}
        />

        <div className="dialog-footer">
          <h3 className="dialog-footer-title">Current selected items:</h3>
          <SelectedItemsList
            items={tempSelectedItems}
            onRemoveItem={onRemoveItem}
            isDialog={true}
          />

          <div className="dialog-footer-actions">
            <button type="button" className="save-btn" onClick={onSave}>
              Save
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionDialog;
