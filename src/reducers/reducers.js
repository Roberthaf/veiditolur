export const authReducer = (
    state = { isLoggedIn: false, user: null }, action
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
export const areaReducer = (
  state = { whatArea: null, whichRiver: null }, action
  ) => {
  switch (action.type) {
    case "SELECT_AREA":
      return{
        whatArea: action.type
      };
    case "SELECT_RIVER":
      return {
        whichRiver: action.type
      };
    default:
      return state;
  }
}  