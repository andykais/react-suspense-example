import * as React from 'react'
import { LoadingSpinner } from '../../components/loading-spinner'
import { Show } from './components/show'

const ShowPage = ({ match }) => {
  const { id } = match.params
  return (
    <React.Suspense maxDuration={1000} fallback={<LoadingSpinner />}>
      <Show id={id} />
    </React.Suspense>
  )
}
export default ShowPage
