const initialState = {
  loading: false
};

export default function list(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: action.item };

    default:
      return state;
  }
}
