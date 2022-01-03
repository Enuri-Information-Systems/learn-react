import { ADD_TO_VISITED, CLEAR_VISITED } from "./visitedTypes";
export const addToVisited = (payload) => {
  return {
    type: ADD_TO_VISITED,
    payload,
  };
};

export const clearVisited = () => {
  return {
    type: CLEAR_VISITED,
  };
};

export const clearAndInsert = () => {
    return (dispatch)=>{

    }
  };
