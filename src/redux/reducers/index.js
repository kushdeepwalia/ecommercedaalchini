import { combineReducers } from "redux"
import * as Reducers from "./reducers"

const reducers = combineReducers({
   userDet: Reducers.userDet,
   isloggedIn: Reducers.isloggedIn,
   cart: Reducers.cart,
   products: Reducers.products,
})

export default reducers