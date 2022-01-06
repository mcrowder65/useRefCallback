import React from "react"
const useCallbackRef = (callback) => {
  const callbackRef = React.useRef(null)

  React.useEffect(() => {
    console.log("assigning callback to refCallback")
    callbackRef.current = callback
  }, [callback])
  return callbackRef
}
const useEventListener = (type, callback) => {
  const callbackRef = useCallbackRef(callback)
  React.useEffect(() => {
    let callback = callbackRef.current
    console.log("subscribe")
    window.addEventListener(type, callback)
    return () => {
      console.log("unsubscribe")
      window.removeEventListener(type, callback)
    }
  }, [type])
}
function UseCallbackRef() {
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

export default UseCallbackRef
