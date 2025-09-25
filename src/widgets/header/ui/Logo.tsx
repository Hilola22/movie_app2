import { memo } from "react"
import { Link } from "react-router-dom"
import logo from "@/shared/assets/logo.svg"

export const Logo = memo(() => {
  return (
    <Link to={"/"}>
        <img src={logo} alt="Logo" />
    </Link>
  )
})
