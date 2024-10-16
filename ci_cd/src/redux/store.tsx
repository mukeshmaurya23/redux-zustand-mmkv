import { configureStore } from "@reduxjs/toolkit"
import rootReducers, { PersistConfigTypes } from "./reducers/combineReducers"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import { MMKVStorage } from "../utils/storage-mmkv"
const persistConfig: PersistConfig<PersistConfigTypes> = {
    key: 'root',
    storage: MMKVStorage,
    // blacklist: ['auth'] //in future auth slice will not not be persisted  
    whitelist: ['productList'] //This will be persisted
}
const persistRootReducer = persistReducer(persistConfig, rootReducers)
const store = configureStore({
    reducer: persistRootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    },
})
export type AppSelector = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppSelector>()

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
// export type AppSelector = ReturnType<typeof store.getState>
// export const useAppSelector: TypedUseSelectorHook<AppSelector> = useSelector
export const persistAppStore = persistStore(store)
export default store