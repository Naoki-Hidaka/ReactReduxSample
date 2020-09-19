import { combineReducers } from "redux"

import tweetsReducer from "./tweetsReducer"
import userReducer from "./usersReducer"

export default combineReducers({
    tweetsReducer,
    userReducer
})