import * as React from 'react'

export class ErrorBoundary extends React.Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error }
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log('eERROR')
    logErrorToMyService(error, info)
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    if (error) {
      return <p>{error}</p>
    } else {
      return children
    }
  }
}
