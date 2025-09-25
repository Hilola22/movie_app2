import { memo } from "react"
import { Logo } from "./Logo"
import { Navigation } from "./Navigation"
import { Option } from "./Option"

export const Header = memo(() => {
  return (
    <header className="dark:bg-black">
      <nav className="container flex justify-between items-center h-20">
        <Logo />
        <Navigation />
        <Option />
      </nav>
    </header>
  );
})
