import React from "react"
import { render as rtlRender } from "@testing-library/react"
import Providers from "src/providers"

const render = (ui: React.ReactElement) => {
  return rtlRender(<Providers>{ui}</Providers>)
}

export default render
