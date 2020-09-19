import React from "react"
import styled from "@emotion/styled"

const _Button = styled.button`
  background-color: ${props => props.theme.palette.primary};
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

function ExampleButton(props) {
  return <_Button {...props}>{props.label}</_Button>
}

export default ExampleButton
