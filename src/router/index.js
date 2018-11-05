import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from './routes'

const RouteContainer = ({ route }) => (
  <Route {...route} />
  // <Route path={route.path} exact={route.exact} component={route.component} render={route.render} />
)

export const Router = () => (
  <BrowserRouter>
    <div>
      {routes.map((route, i) => (
        <RouteContainer key={i} route={route} />
      ))}
    </div>
  </BrowserRouter>
)
