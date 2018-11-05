import * as React from 'react'
import { ErrorBoundary } from './components/error-boundary'
import { HomePage } from './containers/HomePage'
import { Router } from './router'
import { Store } from './store'

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Store.Container>
          <Router />
        </Store.Container>
      </ErrorBoundary>
    )
  }
}
export default App
