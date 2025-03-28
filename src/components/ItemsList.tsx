import React from "react";
import { Item } from "../types/types";

interface ItemsListProps {
  items: Item[];
  selectedItems: Item[];
  onItemToggle: (item: Item) => void;
}

const ItemsList: React.FC<ItemsListProps> = ({
  items,
  selectedItems,
  onItemToggle,
}) => {
  const isSelected = (itemId: number) => {
    return selectedItems.some((item) => item.id === itemId);
  };

  const isMaxSelected = selectedItems.length >= 3;

  return (
    <div className="items-list">
      {items.map((item) => (
        <div
          onClick={() =>
            !isMaxSelected || isSelected(item.id) ? onItemToggle(item) : null
          }
          key={item.id}
          className="item-row"
        >
          <input
            type="checkbox"
            id={`item-${item.id}`}
            className="item-checkbox"
            checked={isSelected(item.id)}
            onChange={() => onItemToggle(item)}
            disabled={isMaxSelected && !isSelected(item.id)}
          />
          <label htmlFor={`item-${item.id}`} className="item-label">
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
