import React from "react"
import { Route, Switch } from "react-router-dom"
import Simple from "src/pages/simple"
import ExternalExample from "src/pages/external-example"
import CallbackRef from "src/pages/callback-ref"
import UseCallbackRef from "src/pages/use-callback-ref"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={() => <div>root</div>} exact />
      <Route path="/simple" component={Simple} exact />
      <Route path="/external" component={ExternalExample} exact />
      <Route path="/callback-ref" component={CallbackRef} exact />
      <Route path="/use-callback-ref" component={UseCallbackRef} exact />
    </Switch>
  )
}

export default Routes
