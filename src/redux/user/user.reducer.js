//initialize default value
const INITIAL_STATE = {
  currentUser: null,
};

//an 'action' has a type and a playload, if type matches, then set playload to return new state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.playload,
      };

    default:
      return state;
  }
};

export default userReducer;
