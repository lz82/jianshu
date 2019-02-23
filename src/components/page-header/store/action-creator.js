import * as ActionTypes from './action-types'

export const searchkeyChange = val => ({
  type: ActionTypes.SEARCHKEY_CHANGE,
  payload: val
})

export const searchFocusChange = val => ({
  type: ActionTypes.SEARCH_FOCUS_CHANGE,
  payload: val
})

export const hotActiveChange = val => ({
  type: ActionTypes.HOT_ACTIVITE_CHANGE,
  payload: val
})

export const hotListGet = () => ({
  type: ActionTypes.HOT_LIST_GET
})

export const hostListSet = ({hotList, hotIndex}) => ({
  type: ActionTypes.HOT_LIST_SET,
  payload: {
    hotList,
    hotIndex
  }
})

export const hostIndexChange = val => ({
  type: ActionTypes.HOT_INDEX_CHANGE
})