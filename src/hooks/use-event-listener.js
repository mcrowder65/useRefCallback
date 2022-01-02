import React from "react"

const useEventListener = (type, callback) => {
  React.useEffect(() => {
    window.addEventListener(type, callback)
    return () => {
      window.removeEventListener(type, callback)
    }
  }, [type, callback])
}

export default useEventListener
