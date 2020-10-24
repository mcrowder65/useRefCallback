import React from "react"
import render from "test/utils"
import { axe } from "jest-axe"
import TextField from "src/components/text-field"
test("passes axe", async () => {
  const { container } = render(<TextField />)

  const result = await axe(container)
  expect(result).toHaveNoViolations()
})
