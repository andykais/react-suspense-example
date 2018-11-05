import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from './routes'

const basename = process.env.NODE_ENV === 'production' ? '/react-suspense-example/' : '/'
console.log({ basename })

export const Router = () => (
  <BrowserRouter basename={basename}>
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  </BrowserRouter>
)
