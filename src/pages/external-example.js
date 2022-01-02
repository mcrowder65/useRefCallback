import React from "react"
import useEventListener from "src/hooks/use-event-listener"
function ExternalExample() {
  const [count, setCount] = React.useState(0)
  useEventListener("resize", () => {
    setCount((prev) => prev + 1)
  })
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}

export default ExternalExample
