import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface ShoppingCartState {
  loading: boolean
  error: string | null
  items: any[]
}

const initialState: ShoppingCartState = {
  loading: true,
  error: null,
  items: [],
}

export const getShoppingCart = createAsyncThunk(
  'shoppingCart/getShoppingCart',
  async (jwt: string, thunkAPI) => {
    const { data } = await axios.get(`/shoppingCart`, {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    })
    return data.data.shoppingCartItems
  }
)

export const addShoppingCartItem = createAsyncThunk(
  'shoppingCart/addShoppingCartItem',
  async (paramaters: { jwt: string; touristRouteId: string }, thunkAPI) => {
    const { data } = await axios.post(
      `/shoppingCart/items`,
      {
        touristRouteId: paramaters.touristRouteId,
      },
      {
        headers: {
          Authorization: `bearer ${paramaters.jwt}`,
        },
      }
    )
    return data.data.shoppingCartItems
  }
)

export const checkout = createAsyncThunk(
  'shoppingCart/checkout',
  async (jwt: string, thunkAPI) => {
    const { data } = await axios.post(`/shoppingCart/checkout`, null, {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    })
    return data.data
  }
)

export const clearShoppingCartItem = createAsyncThunk(
  'shoppingCart/clearShoppingCartItem',
  async (paramaters: { jwt: string; itemIds: number[] }, thunkAPI) => {
    return await axios.delete(`/shoppingCart/items`, {
      headers: {
        Authorization: `bearer ${paramaters.jwt}`,
      },
    })
  }
)

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {},
  extraReducers: {
    [getShoppingCart.pending.type]: (state) => {
      // return { ...state, loading: true }
      state.loading = true
    },
    [getShoppingCart.fulfilled.type]: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    [getShoppingCart.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false
      state.error = action.payload
    },
    [addShoppingCartItem.pending.type]: (state) => {
      // return { ...state, loading: true }
      state.loading = true
    },
    [addShoppingCartItem.fulfilled.type]: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    [addShoppingCartItem.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false
      state.error = action.payload
    },
    [clearShoppingCartItem.pending.type]: (state) => {
      // return { ...state, loading: true }
      state.loading = true
    },
    [clearShoppingCartItem.fulfilled.type]: (state, action) => {
      state.items = []
      state.loading = false
      state.error = null
    },
    [clearShoppingCartItem.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false
      state.error = action.payload
    },
    [checkout.pending.type]: (state) => {
      // return { ...state, loading: true }
      state.loading = true
    },
    [checkout.fulfilled.type]: (state, action) => {
      state.items = []
      state.loading = false
      state.error = null
    },
    [checkout.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false
      state.error = action.payload
    },
  },
})
