"use client";

import React from "react";
import { useItemSelection } from "../hooks/useItemSelection";
import SelectedItemsList from "./SelectedItemsList";
import SelectionDialog from "./SelectionDialog";
import "../styles/ItemSelector.css";

const ItemSelector: React.FC = () => {
  const {
    selectedItems,
    dialogState,
    filteredItems,
    openDialog,
    closeDialog,
    saveSelection,
    toggleItemSelection,
    removeTempItem,
    removeItem,
    updateSearchQuery,
    updateFilter,
  } = useItemSelection();

  return (
    <div className="item-selector-container">
      <h1 className="item-selector-heading">ITEMS SELECTOR</h1>

      <p className="selected-items-info">
        You currently have {selectedItems.length} selected item
        {selectedItems.length !== 1 ? "s" : ""}.
      </p>

      <SelectedItemsList items={selectedItems} onRemoveItem={removeItem} />

      <button type="button" className="change-btn" onClick={openDialog}>
        Change my choice
      </button>

      <SelectionDialog
        isOpen={dialogState.isOpen}
        filteredItems={filteredItems}
        tempSelectedItems={dialogState.tempSelectedItems}
        searchQuery={dialogState.searchQuery}
        activeFilter={dialogState.activeFilter}
        onClose={closeDialog}
        onSave={saveSelection}
        onItemToggle={toggleItemSelection}
        onRemoveItem={removeTempItem}
        onSearchChange={updateSearchQuery}
        onFilterChange={updateFilter}
      />
    </div>
  );
};

export default ItemSelector;
