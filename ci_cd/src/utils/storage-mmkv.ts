import { MMKV, MMKVConfiguration } from 'react-native-mmkv';
import { Storage } from "redux-persist"
type VALUETYPE = boolean | string | number | Uint8Array
const KEYS = {
    token: "@token"
}


export const customMMKVStorage = {
    setItem: (key: keyof typeof KEYS, value: VALUETYPE) => {
        storage.set(key, value);
    },
    getItem: (key: keyof typeof KEYS) => {
        const value = storage.getString(key);
        return value
    },
    removeItem: (key: keyof typeof KEYS) => {
        storage.delete(key)
    },
    clearAll: () => {
        storage.clearAll()
    },
}

export const storage = new MMKV({
    id: "app-storage",
    encryptionKey: "Abcdedfghijklmnopqrstuvwx",

})

const MMKVStorage: Storage = {
    setItem: (key: keyof typeof KEYS, value: VALUETYPE) => {
        storage.set(key, value);
        return Promise.resolve(true);

    },
    getItem: (key: keyof typeof KEYS) => {
        const value = storage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: (key: keyof typeof KEYS) => {
        storage.delete(key)
        return Promise.resolve();

    }
};

export {
    MMKVStorage
}

