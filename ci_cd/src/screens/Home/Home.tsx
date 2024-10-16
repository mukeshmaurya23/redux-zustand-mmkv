import { Button, Pressable, Text, View } from "react-native"
import { useAppDispatch, useAppSelector } from "../../redux/store"
import { customMMKVStorage, MMKVStorage, } from "../../utils/storage-mmkv"
import { useEffect } from "react"
import { fetchProductList, fetchProductListById } from "../../redux/actions/fetchProduct"
import useBasicStore from "../../zustand/useBasicStore"

const Home = () => {
    const { productList } = useAppSelector(state => state.productList)
    const { addItem, items, removeItem, getCount, fetchItems, productListsFromZustand } = useBasicStore()
    const dispatch = useAppDispatch()
    const token = customMMKVStorage.getItem("token")
    useEffect(() => {
        dispatch(fetchProductList())


    }, [])
    useEffect(() => {
        console.log(items, "items")
        fetchItems()
    }, [])
    console.log(token, "tokennnnnn")
    console.log(JSON.stringify(productList, null, 2), "productList")
    console.log(JSON.stringify(productListsFromZustand, null, 2), "productListsFromZustand")
    console.log(getCount(), "getCount")
    const handleClearStorage = () => {
        console.log("pressedd")
        customMMKVStorage.removeItem("token")
    }

    return (
        <View>
            <Text onPress={() => console.log("pressss")}>
                Home Component {token}
            </Text>

            {/* <Button title="Clear Storage" onPress={handleClearStorage} /> */}
            <Pressable
                style={{
                    padding: 10,
                    backgroundColor: "red",
                    marginTop: 20
                }}
                onPress={handleClearStorage}
            >
                <Text>
                    CLear
                </Text>
            </Pressable>

        </View>
    )
}
export default Home