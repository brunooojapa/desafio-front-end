const initialState = {
  loading: false,
  list: {},
  addPokemon: {}
};

export default function list(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: action.item };
    case 'ADD_LIST':
      return { ...state, list: action.obj };
    case 'ADD_POKEMON':
      return { ...state, addPokemon: action.obj };
    default:
      return state;
  }
}
