export const authReducer= (
    state = { isLoggedIn: false, user: null },
    action
  ) => {
    switch (action.type) {
      case "LOGIN":
        return {
          isLoggedIn: true
        };
      case "LOGOUT":
        return {
          isLoggedIn: false
        };
      default:
        return state;
    }
  };