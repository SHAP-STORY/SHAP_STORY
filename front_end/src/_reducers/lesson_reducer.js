//NOTE signin && register
import { BASIC_USER, ADVANCED_USER  } from "../_actions/types";

const initialStates = {
    


}

const reducers = (state = initialStates, action) => {
    const { type } = action;
    switch (type) {
      case BASIC_USER.BasicUser: {
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