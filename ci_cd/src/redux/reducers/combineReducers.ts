import { combineReducers } from "@reduxjs/toolkit"
import { productSlice } from "../index"
import { initialStateProps } from "../slices/productSlice"
export type PersistConfigTypes = {
    productList: initialStateProps
}
const rootReducers = combineReducers({
    productList: productSlice
})
export default rootReducers