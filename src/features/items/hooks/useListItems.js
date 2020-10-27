import {useMemo} from "react";
import useItems from "./useItems";

export default function useListItems({ listId, auto }) {
  const [items, getItems] = useItems({ listId, auto });
  // Filter list items
  const listItems = useMemo(() => {
    return items.data ? Object.values(items.data).filter(item => item.listId === listId) : [];
  }, [items, listId]);
  // Replace items.data with the filtered listItems
  return [{ ...items, data: listItems }, getItems];
}