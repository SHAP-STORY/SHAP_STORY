//NOTE signin && register
import { BASIC_USER, ADVANCED_USER  } from "../_actions/types";

const initialStates = {
    complete: 0,
    

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