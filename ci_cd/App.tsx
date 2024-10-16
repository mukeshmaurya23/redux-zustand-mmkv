/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import store, { persistAppStore } from './src/redux/store';
import Home from './src/screens/Home/Home';
import { PersistGate } from 'redux-persist/integration/react';
import { customMMKVStorage, MMKVStorage, storage, } from './src/utils/storage-mmkv';


function App(): JSX.Element {
  console.log("CD_CD_Test2")
  customMMKVStorage.setItem("token", "4678shshshshshsh")
  // storage.getAllKeys()
  console.log(storage.getAllKeys())
  console.log(storage.contains('token'))
  console.log(storage.getString('token'))
  return (
    <Provider store={store}>
      <PersistGate persistor={persistAppStore} loading={null}>
        <Home />
      </PersistGate>
    </Provider>
  );
}

export default App;
