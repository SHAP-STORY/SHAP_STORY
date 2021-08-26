//NOTE signin && register
import { HOME_USER  } from "../_actions/types";

const initialStates = {

}

const reducers = (state = initialStates, action) => {
    const { type } = action;
    switch (type) {
      case HOME_USER.HomeUser: {
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
