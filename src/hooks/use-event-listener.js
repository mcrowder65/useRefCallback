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

export default useEventListener
