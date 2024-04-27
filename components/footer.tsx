import { Button } from "./ui/button"

function Footer() {
  return (
    <footer className="w-full px-10 pt-20 md:px-[20%]">
      <div className="grid md:grid-cols-5">
        <div className="flex flex-col">
          <h1 className="text-black/60 md:mb-8">Menu</h1>
          <Button variant="link" className="w-fit px-0">Demos</Button>
          <Button variant="link" className="w-fit px-0">Pages</Button>
          <Button variant="link" className="w-fit px-0">Support</Button>
          <Button variant="link" className="w-fit px-0">Contact</Button>
        </div>
        <div className="flex mt-8 flex-col md:mt-0">
          <h1 className="text-black/60 md:mb-8">Contact us</h1>
          <Button variant="link" className="w-fit px-0 text-blue-500 font-bold">contact@waveconsult.com</Button>
          <Button variant="link" className="w-fit px-0 text-blue-500 font-bold">+55 (93) 99138-4250</Button>
        </div>
      </div>

      <div className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full" />

      <div className="my-10">
        <span className="text-black/60">© 2024 Copyright. All Rights Reserved. wave consult.</span>
      </div>
    </footer>
  )
}

export default Footer
