import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { RootState } from '../store'

export const FETCH_RECOMMEND_PRODUCTS_START = 'FETCH_RECOMMEND_PRODUCTS_START'
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  'FETCH_RECOMMEND_PRODUCTS_SUCCESS'
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 'FETCH_RECOMMEND_PRODUCTS_FAIL'

interface FetchRecomendProductsStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FetchRecomendProductsSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS
  payload: any
}

interface FetchRecomendProductsFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL
  payload: any
}

export type RecommendProductAction =
  | FetchRecomendProductsStartAction
  | FetchRecomendProductsSuccessAction
  | FetchRecomendProductsFailAction

export const fetchRecomendProductsStartActionCreator =
  (): FetchRecomendProductsStartAction => {
    return {
      type: FETCH_RECOMMEND_PRODUCTS_START,
    }
  }

export const fetchRecomendProductsSuccessActionCreator = (
  data
): FetchRecomendProductsSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data,
  }
}

export const fetchRecomendProductsFailActionCreator = (
  error
): FetchRecomendProductsFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error,
  }
}

// thunk 可以返回一个函数，不一定是js对象
// 在一个thunk action中可以完成一系列连续的action操作，并且可以处理异步逻辑
// 业务逻辑可以从ui层面挪到这里，代码分层更清晰
export const giveMeDataActionCreator =
  (): ThunkAction<void, RootState, unknown, RecommendProductAction> =>
  async (dispatch, getState) => {
    dispatch(fetchRecomendProductsStartActionCreator())
    try {
      const { data } = await axios.get(`/productCollections`)
      dispatch(fetchRecomendProductsSuccessActionCreator(data.data))
    } catch (error: any) {
      dispatch(fetchRecomendProductsFailActionCreator(error.message))
    }
  }
