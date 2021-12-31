import React from "react"
import TextField from "src/components/text-field"
import styled from "@emotion/styled"
const Button = styled.button`
  background: blue;
`
const Container = styled.div`
  ${Button} {
    background: orange;
  }
`
function App() {
  return (
    <div>
      <p>i am the app</p>
      <TextField />
      <Button>outside</Button>
      <Container>
        <Button>Inside</Button>
      </Container>
    </div>
  )
}

export default App
