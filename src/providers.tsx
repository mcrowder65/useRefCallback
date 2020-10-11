import React from "react"
import { ThemeProvider } from "emotion-theming"
import theme from "src/theme"
type Props = {
  children: any
}
const Providers = (props: Props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Providers
