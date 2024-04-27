import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="flex min-w-full p-4 align-center justify-between absolute md:px-12">
      <div className="flex align-center text-white">
        <Button variant="ghost" className="hidden text-xl p-0 px-2 font-bold md:visible">wave.consult</Button>
        <Button variant="ghost" size="icon">
          <MenuIcon />
        </Button>
        <nav className="hidden space-x-2 ml-4 md:visible">
          <Button variant="link" className="text-white">Demos</Button>
          <Button variant="link" className="text-white">Pages</Button>
          <Button variant="link" className="text-white">Support</Button>
          <Button variant="link" className="text-white">Contact</Button>
        </nav>
      </div>
      <Button size="lg" className="text-md font-bold">Get started now</Button>
    </header>
  )
}

export default Header
