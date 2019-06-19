import { LOAD_RESTAURANTS } from '../actions/action_types';
const INITIAL_STATE = {
  restaurants: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_RESTAURANTS:
      return { ...state, restaurants: action.payload }
    default: return state
  }
}
