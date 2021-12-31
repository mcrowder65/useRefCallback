import React from "react"
import { ThemeProvider } from "@emotion/react"
import theme from "src/theme"
const Providers = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Providers
