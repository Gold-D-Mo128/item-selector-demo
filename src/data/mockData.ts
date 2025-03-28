import { Item, FilterOption } from "../types/types";

// Generate 100 mock items
export const mockItems: Item[] = Array.from({ length: 300 }, (_, index) => ({
  id: index + 1,
  name: `Element ${index + 1}`,
  value: index + 1,
}));

// Filter options for the dropdown
export const filterOptions: FilterOption[] = [
  { label: "No filter", value: null },
  { label: "> 10", value: 10 },
  { label: "> 100", value: 100 },
  { label: "> 200", value: 200 },
];

// Initial selected items (for demo purposes)
export const initialSelectedItems: Item[] = [
  mockItems[4], // Element 5
  mockItems[50], // Element 51
];
