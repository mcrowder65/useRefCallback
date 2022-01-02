import React from "react"
const useEventListener = (type, callback) => {
  const refCallback = React.useRef(null)

  React.useEffect(() => {
    console.log("assigning callback to refCallback")
    refCallback.current = callback
  }, [callback])
  React.useEffect(() => {
    console.log("subscribe")
    window.addEventListener(type, refCallback.current)
    return () => {
      console.log("unsubscribe")
      window.removeEventListener(type, refCallback.current)
    }
  }, [type])
}
function RefCallback() {
  const [count, setCount] = React.useState(0)
  useEventListener("resize", () => {
    setCount((prev) => prev + 1)
  })
  return (
    <div>
      <p>I only subscribe once by the power of refs!</p>
      <p>Count: {count}</p>
    </div>
  )
}

export default RefCallback
