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

export function addPokemon(obj) {
  return {
    type: 'ADD_POKEMON',
    obj
  };
}

export function itemDetails(obj) {
  return {
    type: 'ITEM_DETAILS',
    obj
  };
}
