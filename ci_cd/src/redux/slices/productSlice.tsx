
import { createSlice } from "@reduxjs/toolkit"
import { fetchProductList, fetchProductListById } from "../actions/fetchProduct"
type Rating = {
    rate: number,
    count: number
}
interface ProductListProps {
    id: string,
    prize: number,
    title: string,
    description: string,
    category: string,
    image: string,
    rating: Rating
}
export type initialStateProps = {
    productList: ProductListProps[]
    productListByIdItem: ProductListProps[]
    loading: boolean,
    error: string
}
const initialState: initialStateProps = {
    productList: [],
    productListByIdItem: [],
    error: "",
    loading: false

}

const productSlice = createSlice({
    name: "productList",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            console.log("Item Added")
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchProductList.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchProductList.fulfilled, (state, action) => {
            state.loading = false,
                state.productList = action.payload
        });
        builder.addCase(fetchProductList.rejected, (state, action) => {
            state.error = typeof action.payload === 'string' ? action.payload : "Error While Fetching"
        })
        builder.addCase(fetchProductListById.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchProductListById.fulfilled, (state, action) => {
            state.loading = false,
                state.productListByIdItem = action.payload
        });
        builder.addCase(fetchProductListById.rejected, (state, action) => {
            state.error = typeof action.payload === 'string' ? action.payload : "Error While Fetching"
        })
    },

})
export const { addItemToCart } = productSlice.actions
export default productSlice.reducer