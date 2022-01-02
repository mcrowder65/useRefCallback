import React from "react"
import { Route, Switch } from "react-router-dom"
import Simple from "src/pages/simple"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={() => <div>root</div>} exact />
      <Route path="/simple" component={Simple} exact />
    </Switch>
  )
}

export default Routes
