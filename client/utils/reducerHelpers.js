// example call updateObjectInArray(state.garments, action, 'garment')
export function updateObjectInArray(array, action, item_name) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item;
    }
    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...action[item_name],
    };
  });
}

// example call const newGarments = removeItem(state.garments, action);
export function removeItem(array, action) {
  return [...array.slice(0, action.index), ...array.slice(action.index + 1)];
}
