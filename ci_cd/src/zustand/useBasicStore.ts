
import { create } from "zustand"
const BASE_URL = "https://fakestoreapi.com/products"
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
type BasicStore = {
    items: ProductListProps[],
    productListsFromZustand: ProductListProps[],
    fetchItems: () => Promise<ProductListProps[]>,
    addItem: (item: ProductListProps) => void,
    removeItem: (item: ProductListProps) => void,
    getCount: () => number,
}
const useBasicStore = create<BasicStore>((set, get) => {
    return {
        //initial state
        items: [],
        productListsFromZustand: [],
        //actions to fetch items
        fetchItems: async () => {
            try {
                const productItems = await fetch(BASE_URL)
                const resJson = await productItems.json()
                set({ productListsFromZustand: resJson })
                return resJson
            } catch (error: any) {
                console.log("Error While Fetching Products", error.message)
            }
        },
        //actions
        addItem: (item: ProductListProps) => {
            set((state) => {
                return {
                    items: [...state.items, item]
                }
            })
        },
        removeItem: (item: ProductListProps) => {
            set((state) => {
                return {
                    items: state.items.filter((i) => i !== item)
                }
            })
        },
        getCount: () => get().productListsFromZustand.length
    }
})
export default useBasicStore


