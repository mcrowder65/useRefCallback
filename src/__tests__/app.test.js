import React from "react"
import App from "src/app"
import { screen } from "@testing-library/react"
import { render } from "test/render"
test("it renders", () => {
  render(<App />)

  expect(screen.getByText(/i am the app/i)).toBeInTheDocument()
})
