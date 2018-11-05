import { createConnectedStore } from 'undux'
import { effects } from './effects'

const initialState = {
  searchInput: '',
  searchInputThrottled: null
  // showList: null
}

export const Store = createConnectedStore(initialState, effects)
