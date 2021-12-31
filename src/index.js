import React from "react"
import ReactDOM from "react-dom"
import App from "src/app"
import Providers from "src/providers"

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root"),
)
