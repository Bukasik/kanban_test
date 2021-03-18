const deleteListItem = (arr, index) => {
  const newList = [
    ...arr.slice(0, index),
    ...arr.slice(index + 1),
  ];
  return newList;
};

const addListItem = (arr, element, index = arr.length) => {
  const newList = [
    ...arr,
    element,
  ];
  return newList;
};

export { deleteListItem, addListItem };
