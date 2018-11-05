import { HomePage } from '../containers/HomePage'
import { LoadingSpinner } from '../components/loading-spinner'
import * as React from 'react'

const ShowPage = React.lazy(() => import('../containers/ShowPage'))

const LazyComponent = Component => props => (
  <React.Suspense fallback={<LoadingSpinner />}>
    <Component {...props} />
  </React.Suspense>
)

export const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/show-info/:id',
    exact: true,
    component: LazyComponent(ShowPage)
  }
]
