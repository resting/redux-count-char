import { combineReducers } from 'redux';

const countResult = (state={}, action) => {
  switch (action.type) {
    case 'COUNT_CHAR':
      return {
        totalChar: action.text.length
      }
    default:
      return state;
  }
};

export const appReducers = combineReducers({
  countResult
});

