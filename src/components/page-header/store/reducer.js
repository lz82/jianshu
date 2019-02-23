import { fromJS } from 'immutable'

import * as ActionTypes from './action-types'
// state需要使用immutable转换下，变成immutable对象
const defaultState = fromJS({
  searchKey: '',
  searchFocus: false,
  hotActive: false,
  hotList: [],
  hotIndex: 0
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCHKEY_CHANGE:
      return state.set('searchKey', action.payload)
    case ActionTypes.SEARCH_FOCUS_CHANGE:
      return state.set('searchFocus', action.payload)
    case ActionTypes.HOT_ACTIVITE_CHANGE:
      return state.set('hotActive', action.payload)
    case ActionTypes.HOT_LIST_SET:
      return state.merge({
        hotList: action.payload.hotList,
        hotIndex: action.payload.hotIndex
      })
    case ActionTypes.HOT_INDEX_CHANGE: 
      let currentIndex = state.get('hotIndex') + 1
      
      const list = state.get('hotList')
      const pageSize = 10
      if (Math.ceil(list.length / pageSize) <= currentIndex) {
        return state.set('hotIndex', 0)
      } 
      
      return state.set('hotIndex', currentIndex)
    default: 
      return state
  }
}