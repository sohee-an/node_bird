import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

// (이전상태, 액션) => 다음상태
/**리덕스 합치기 */
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    // HYDRATE를 위한 index리덕스 서버사이드렌더링을 위해
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
