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

function Simple() {
  useEventListener("resize", () => {
    console.log("hello")
  })
  return <div>I log hello on every resize, and I only subscribe one time</div>
}

export default Simple
