//NOTE signin && register
import { MYPAGE_USER, SIGNIN_USER  } from "../_actions/types";

const initialStates = {
    userid: "",
    userpasswd: "",
    loginSuccess: false
}

const reducers = (state = initialStates, action) => {
    const { type } = action;
    switch (type) {
      case SIGNIN_USER.SigninUser: {
        return {
          ...state,
          userid: action.payload.userid,
          userpasswd: action.payload.userpasswd,
          loginSuccess: action.payload.loginSuccess
        }
      }case MYPAGE_USER.SigninUser: {
        return {
          ...state,
        }
      }
      default: {
        return state;
      }
    }
  }
  
  export default reducers;
