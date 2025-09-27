import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AOSProvider({ children }) {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 200,
      once: true,
    })
  }, [])

  useEffect(() => {
    AOS.refreshHard()
  }, [location.pathname])

  return children
}
