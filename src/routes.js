import React from "react"
import { Route, Switch } from "react-router-dom"
import Simple from "src/pages/simple"
import ExternalExample from "src/pages/external-example"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={() => <div>root</div>} exact />
      <Route path="/simple" component={Simple} exact />
      <Route path="/external" component={ExternalExample} exact />
    </Switch>
  )
}

export default Routes
