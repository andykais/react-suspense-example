import * as React from 'react'
import { Store } from '../../../../store'
import { TextField } from '../../../../components/text-field'

const SearchInputComponent = ({ store }) => (
  <TextField
    onChange={store.set('searchInput')}
    value={store.get('searchInput')}
    placeholder="search shows..."
  />
)

export const SearchInput = Store.withStore(SearchInputComponent)
