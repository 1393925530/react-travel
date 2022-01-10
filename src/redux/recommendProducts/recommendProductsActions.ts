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
