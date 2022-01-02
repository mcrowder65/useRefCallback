import React from "react"
import { Route, Switch } from "react-router-dom"
import Simple from "src/pages/simple"
import ExternalExample from "src/pages/external-example"
import RefCallback from "src/pages/ref-callback"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={() => <div>root</div>} exact />
      <Route path="/simple" component={Simple} exact />
      <Route path="/external" component={ExternalExample} exact />
      <Route path="/ref-callback" component={RefCallback} exact />
    </Switch>
  )
}

export default Routes
