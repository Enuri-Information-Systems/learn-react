import { ADD_TO_VISITED, CLEAR_VISITED } from "./visitedTypes";
const initial = {
  visited: [],
};

const VisitedReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TO_VISITED:
      return {
        visited: [action.payload, ...state.visited],
      };

    case CLEAR_VISITED:
      return {
        visited: [],
      };

    default:
      return state;
  }
};

export default VisitedReducer;
