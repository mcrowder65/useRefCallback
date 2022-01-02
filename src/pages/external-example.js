import React from "react"
const useEventListener = (type, callback) => {
  React.useEffect(() => {
    console.log("subscribe")
    window.addEventListener(type, callback)
    return () => {
      console.log("unsubscribe")
      window.removeEventListener(type, callback)
    }
  }, [type, callback])
}
function ExternalExample() {
  const [count, setCount] = React.useState(0)
  useEventListener("resize", () => {
    setCount((prev) => prev + 1)
  })
  return (
    <div>
      <p>I subscribe and unsubscribe after every single resize event</p>
      <p>Count: {count}</p>
    </div>
  )
}

export default ExternalExample
