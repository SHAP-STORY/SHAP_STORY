//NOTE signin && register
import { SIGNIN_USER  } from "../_actions/types";

const initialStates = {
    userid: "",
    userpasswd: "",
    loginSuccess: false
}

/*export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USERSIGNIN_USERurn { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}*/
const reducers = (state = initialStates, action) => {
    const { type } = action;
    switch (type) {
      case SIGNIN_USER.SigninUser: {
        return {
          ...state,
          loginSuccess: action.payload
        }
      }
      default: {
        return state;
      }
    }
  }
  
  export default reducers;
