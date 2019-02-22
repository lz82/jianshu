import * as ActionTypes from './action-types'

export const searchkeyChange = val => ({
  type: ActionTypes.SEARCHKEY_CHANGE,
  payload: val
})

export const searchFocusChange = val => ({
  type: ActionTypes.SEARCH_FOCUS_CHANGE,
  payload: val
})