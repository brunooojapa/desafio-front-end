const initialState = {
  loading: false,
  list: []
};

export default function list(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: action.item };
    case 'ADD_LIST':
      return { ...state, list: action.obj };
    default:
      return state;
  }
}
