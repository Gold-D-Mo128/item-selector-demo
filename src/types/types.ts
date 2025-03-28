// Item represents the data structure for selectable items
export interface Item {
  id: number;
  name: string;
  value: number; 
}

// Filter options for the dropdown
export interface FilterOption {
  label: string;
  value: number | null; // null means no filter
}

// State for the selection dialog
export interface SelectionDialogState {
  isOpen: boolean;
  tempSelectedItems: Item[];
  searchQuery: string;
  activeFilter: FilterOption;
}

// Root state interface for Redux
export interface RootState {
  items: ItemsState;
}

// State interface for the items slice
export interface ItemsState {
  allItems: Item[];
  selectedItems: Item[];
}
