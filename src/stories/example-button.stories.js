import React from "react"
import ExampleButton from "../components/example-button"

export default {
  title: "Example/ExampleButton",
  component: ExampleButton,
}

const Template = args => <ExampleButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: "Example Button",
}
