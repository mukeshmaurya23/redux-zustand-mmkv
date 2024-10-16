import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://fakestoreapi.com/products"

export const fetchProductList = createAsyncThunk('productList/fetchProductList', async () => {
    try {
        const productItems = await fetch(BASE_URL)
        const resJson = await productItems.json()
        console.log(resJson, "resJson from product")
        return resJson
    } catch (error: any) {
        console.log("Error While Fetching Products", error.message)
    }
})
export const fetchProductListById = createAsyncThunk('productList/fetchProductListById', async ({ productId }: { productId: number }) => {
    try {
        const productItems = await fetch(`${BASE_URL}/${productId}`)
        const resJson = await productItems.json()
        console.log(resJson, "resJson from product")
        return resJson
    } catch (error: any) {
        console.log("Error While Fetching Products", error.message)

    }
})