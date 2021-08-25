import { combineReducers } from "redux"; //root reducer에서 여러가지 reducer를 합쳐주는 역할
import user from './user_reducer';
//import question from './question_reducer' -> 만약에 question에 대한 기능을 넣는다!하면 추가해줄 수 있는 reducer

const rootReducer = combineReducers({
    user,
    //question
})

export default rootReducer;