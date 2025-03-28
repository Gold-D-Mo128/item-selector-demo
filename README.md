# Item Selection Widget

A React/Next.js component for selecting items with search and filter functionality.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/item-selection-widget.git

# Install dependencies
cd item-selection-widget
npm install

# Run the development server
npm run dev
```

## Tools & Technologies

- React with TypeScript
- Redux for state management
- Next.js with App Router
- CSS
- lucide-react for icons

## Folder Structure

```
/app                         # Next.js App Router
  /page.tsx                  # Item selector page
/src
  /components
    FilterDropdown.tsx      # Filter component
    ItemSelector.tsx        # Main component
    ItemsList.tsx           # List of items
    SearchBar.tsx           # Search component
    SelectedItemsList.tsx   # Shows selected items
    SelectionDialog.tsx     # Dialog modal
  /redux
    store.ts                  # Redux store
    itemsSlice.ts             # Redux slice
  /types
    types.ts                  # TS types
  /hooks
    useItemSelection.ts       # Selection logic
  /data
    mockData.ts               # Mock data
  /styles
    ItemSelector.css        # Styles
```
