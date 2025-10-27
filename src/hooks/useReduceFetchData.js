import { useReducer, useEffect } from 'react'
import { get } from '@/utils/request'

const initialState = {
  data: {},
  loading: true,
  error: false,
}
//定义操作类型
// 定义 action 类型
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'
const SET_DATA = 'SET_DATA'
const RELOAD_START = 'RELOAD_START'

// 定义 reducer 函数
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      }
    case RELOAD_START:
      return {
        ...state,
        loading: true,
        error: false,
      }
    default:
      return state
  }
}
/**
 * 自定义 Hooks 获取数据
 * @param {string} url - API 请求路径（如 '/articles'）
 * @param params - 查询参数（如 { page: 1, limit: 10 }）
 * @returns {{
 *   data: object,
 *   loading: boolean,
 *   error: boolean,
 *   onReload: (function(*=): Promise<void>),
 * }}
 */
const useFetchData = (url, params = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  /**
   * 请求接口
   * @returns {Promise<void>}
   */
  const fetchData = async () => {
    try {
      const { data } = await get(url, params)
      dispatch({ type: FETCH_SUCCESS, payload: data })
    } catch (err) {
      dispatch({ type: FETCH_ERROR })
    }
  }
  /**
   * 重新加载
   * @returns {Promise<void>}
   */
  const onReload = async () => {
    dispatch({ type: RELOAD_START })
    await fetchData()
  }
  /**
   * 设置数据
   * @param {object} data - 数据
   */
  const setData = (data) => {
    dispatch({ type: SET_DATA, payload: data })
  }
  useEffect(() => {
    fetchData()
  }, [url, JSON.stringify(params)])
  return {
    ...state,
    setData,
    onReload,
  }
}
export default useFetchData
