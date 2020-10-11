import React from "react"
import styled from "@emotion/styled"
import { Theme } from "src/theme"
type Props = {
  label: string
}
const ExampleButton = styled(({ label, ...props }: Props) => {
  return <button {...props}>{label}</button>
})`
  background-color: ${(props: { theme: Theme }) => props.theme.palette.primary};
  color: gray;
  width: 200px;
  height: 40px;
  font-size: 18px;
  border: none;
  :active {
    opacity: 0.8;
    transform: translateY(2px);
  }
`

export default ExampleButton
