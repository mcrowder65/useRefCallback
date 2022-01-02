import React from "react"
import useEventListener from "src/hooks/use-event-listener"
function App() {
  useEventListener("resize", () => {
    console.log("hello")
  })
  return <div>I am app</div>
}

export default App
