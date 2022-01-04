import React from "react"
const useEventListener = (type, callback) => {
  const callbackRef = React.useRef(null)

  React.useEffect(() => {
    console.log("assigning callback to refCallback")
    callbackRef.current = callback
  }, [callback])
  React.useEffect(() => {
    console.log("subscribe")
    window.addEventListener(type, callbackRef.current)
    return () => {
      console.log("unsubscribe")
      window.removeEventListener(type, callbackRef.current)
    }
  }, [type])
}
function CallbackRef() {
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

export default CallbackRef
