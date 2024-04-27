import { Button } from "./ui/button";

function Header() {
  return (
    <header className="flex min-w-full py-4 px-12 align-center justify-between">
      <div className="flex align-center">
        <Button variant="ghost" className="text-xl p-0 px-2 font-bold">wave.consult</Button>
        <nav className="space-x-2 ml-4">
          <Button variant="link">Demos</Button>
          <Button variant="link">Pages</Button>
          <Button variant="link">Support</Button>
          <Button variant="link">Contact</Button>
        </nav>
      </div>
      <Button size="lg" className="text-md font-bold">Get started now</Button>
    </header>
  )
}

export default Header
