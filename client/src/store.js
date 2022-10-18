import {createStore,combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { userReducer } from "./reducers/userReducer"
import { apiReducer } from "./reducers/apiReducer"

const reducer = combineReducers({
    user:userReducer,
    image:apiReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store