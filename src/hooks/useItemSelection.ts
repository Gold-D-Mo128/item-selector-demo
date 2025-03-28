"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback, useMemo } from "react";

import {
  Item,
  FilterOption,
  RootState,
  SelectionDialogState,
} from "../types/types";
import { setSelectedItems, removeSelectedItem } from "../redux/itemsSlice";
import { filterOptions } from "../data/mockData";

export const useItemSelection = () => {
  const dispatch = useDispatch();
  const { allItems, selectedItems } = useSelector(
    (state: RootState) => state.items
  );

  // Dialog state
  const [dialogState, setDialogState] = useState<SelectionDialogState>({
    isOpen: false,
    tempSelectedItems: selectedItems,
    searchQuery: "",
    activeFilter: filterOptions[0], // Default to 'No filter'
  });

  // Open dialog and initialize temp selection with current selected items
  const openDialog = useCallback(() => {
    setDialogState((prev) => ({
      ...prev,
      isOpen: true,
      tempSelectedItems: selectedItems,
    }));
  }, [selectedItems]);

  // Close dialog without saving
  const closeDialog = useCallback(() => {
    setDialogState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  // Save selected items from dialog and close
  const saveSelection = useCallback(() => {
    dispatch(setSelectedItems(dialogState.tempSelectedItems));
    setDialogState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, [dispatch, dialogState.tempSelectedItems]);

  // Toggle item selection in dialog
  const toggleItemSelection = useCallback((item: Item) => {
    setDialogState((prev) => {
      // Check if item is already selected
      const isSelected = prev.tempSelectedItems.some((i) => i.id === item.id);

      if (isSelected) {
        // Remove item if already selected
        return {
          ...prev,
          tempSelectedItems: prev.tempSelectedItems.filter(
            (i) => i.id !== item.id
          ),
        };
      } else if (prev.tempSelectedItems.length < 3) {
        // Add item if less than 3 items are selected
        return {
          ...prev,
          tempSelectedItems: [...prev.tempSelectedItems, item],
        };
      }

      // If already 3 items are selected, do nothing
      return prev;
    });
  }, []);

  // Remove item from dialog selection
  const removeTempItem = useCallback((itemId: number) => {
    setDialogState((prev) => ({
      ...prev,
      tempSelectedItems: prev.tempSelectedItems.filter(
        (item) => item.id !== itemId
      ),
    }));
  }, []);

  // Remove item from main selection
  const removeItem = useCallback(
    (itemId: number) => {
      dispatch(removeSelectedItem(itemId));
    },
    [dispatch]
  );

  // Update search query
  const updateSearchQuery = useCallback((query: string) => {
    setDialogState((prev) => ({
      ...prev,
      searchQuery: query,
    }));
  }, []);

  // Update active filter
  const updateFilter = useCallback((filter: FilterOption) => {
    setDialogState((prev) => ({
      ...prev,
      activeFilter: filter,
    }));
  }, []);

  // Filter items based on search and filter dropdown
  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      // Apply search filter
      const matchesSearch = item.name
        .toLowerCase()
        .includes(dialogState.searchQuery.toLowerCase());

      // Apply dropdown filter
      const matchesFilter =
        dialogState.activeFilter.value === null ||
        item.value > dialogState.activeFilter.value;

      return matchesSearch && matchesFilter;
    });
  }, [allItems, dialogState.searchQuery, dialogState.activeFilter]);

  return {
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
  };
};
