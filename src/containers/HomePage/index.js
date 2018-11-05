import * as React from 'react'
import { LoadingSpinner } from '../../components/loading-spinner'
import { TextField } from '../../components/text-field'
import { ShowList } from './components/show-list'
import { SearchInput } from './components/search-input'

export const HomePage = ({ store }) => (
  <div>
    <h1>Find Shows</h1>
    <SearchInput />
    <React.Suspense maxDuration={2000} fallback={<LoadingSpinner />}>
      <ShowList />
    </React.Suspense>
  </div>
)
