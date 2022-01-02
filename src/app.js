import React from "react"
import styled from "@emotion/styled"
import useEventListener from "src/hooks/use-event-listener"
function App() {
  const [resizeCount, setResizeCount] = React.useState(0)
  useEventListener("resize", () => {
    setResizeCount((prev) => prev + 1)
  })
  return (
    <div>
      <p>Resized: {String(resizeCount)}</p>
    </div>
  )
}

export default App
