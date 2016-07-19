export const BOOK_SELECTED = 'BOOK_SELECTED';

export function selectItem(item) {
  return {
    type: BOOK_SELECTED,
    payload: item,
  };
}
