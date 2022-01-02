import React from "react"
import useEventListener from "src/hooks/use-event-listener"
function Simple() {
  useEventListener("resize", () => {
    console.log("hello")
  })
  return <div>I log hello on every resize, and I only subscribe one time</div>
}

export default Simple
