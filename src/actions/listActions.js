export function loading(item) {
  return {
    type: 'LOADING',
    item
  };
}

export function addList(obj) {
  return {
    type: 'ADD_LIST',
    obj
  };
}
