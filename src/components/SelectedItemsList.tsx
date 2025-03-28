import { X } from "lucide-react";
import React from "react";
import { Item } from "../types/types";

interface SelectedItemsListProps {
  items: Item[];
  onRemoveItem: (itemId: number) => void;
  isDialog?: boolean;
}

const SelectedItemsList: React.FC<SelectedItemsListProps> = ({
  items,
  onRemoveItem,
  isDialog = false,
}) => {
  return (
    <div className="selected-items-wrapper">
      {items.map((item) => (
        <div key={item.id} className="selected-item">
          <span className="selected-item-name">{item.name}</span>
          <button
            type="button"
            className="remove-item-btn"
            onClick={() => onRemoveItem(item.id)}
            aria-label={`Remove ${item.name}`}
          >
            <X style={{ width: "1rem" }} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedItemsList;
