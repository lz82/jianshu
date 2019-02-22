import { fromJS } from 'immutable'

import * as ActionTypes from './action-types'
// state需要使用immutable转换下，变成immutable对象
const defaultState = fromJS({
  searchKey: '',
  searchFocus: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCHKEY_CHANGE:
      return state.set('searchKey', action.payload)
    case ActionTypes.SEARCH_FOCUS_CHANGE:
      return state.set('searchFocus', action.payload)
    default: 
      return state
  }
}