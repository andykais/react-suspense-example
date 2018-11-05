import SpinnerSvg from '../../../images/Rolling-1s-200px.svg'
import * as React from 'react'

const sizes = {
  small: { width: 20, height: 20 },
  medium: { width: 50, height: 50 },
  large: { width: 100, height: 100 }
}

export const LoadingSpinner = ({ size = 'medium' }) => (
  <SpinnerSvg {...sizes[size]} />
)
