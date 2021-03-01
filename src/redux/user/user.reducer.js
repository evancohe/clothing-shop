import { UserActionTypes } from "./user.types";

//initialize default value
const INITIAL_STATE = {
  currentUser: null,
};

//an 'action' has a type and a playload, if type matches, then set playload to return new state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
