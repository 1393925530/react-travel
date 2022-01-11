import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import { actionLog } from './middleWares/actionLog'
import { productDetailSlice } from './productDetail/slice'

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
})

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export default store
