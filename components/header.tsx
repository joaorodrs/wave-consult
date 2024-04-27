'use client'

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { motion } from 'framer-motion'

import { Button } from "./ui/button";
import useMediaQuery from "@/app/hooks/use-media-query";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const nav = {
  open: {
    y: 0,
    opacity: 1,
    zIndex: 50,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    zIndex: 50,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <header
      className="flex min-w-full p-4 align-center justify-between absolute md:px-12"
    >
      <motion.div
        initial={false}
        animate={isOpen || isDesktop ? "open" : "closed"}
        className="flex align-center text-white"
      >
        <Button variant="ghost" className="hidden text-xl p-0 px-2 font-bold md:flex">wave.consult</Button>
        <Button variant="ghost" size="icon" className="!text-black !bg-transparent z-50 size-[45px] md:hidden" onClick={() => setIsOpen(curr => !curr)}>
          <MenuIcon />
        </Button>
        <motion.nav
          className="absolute top-32 left-0 bottom-0 right-0 flex flex-col md:static md:ml-4 md:flex-row md:space-x-2"
          variants={nav}
        >
          <Button variant="link" className="z-50 md:text-white">Demos</Button>
          <Button variant="link" className="z-50 md:text-white">Pages</Button>
          <Button variant="link" className="z-50 md:text-white">Support</Button>
          <Button variant="link" className="z-50 md:text-white">Contact</Button>
        </motion.nav>
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-full h-screen bg-white md:hidden"
          variants={sidebar}
        />
      </motion.div>
      <Button size="lg" className="text-md font-bold">Get started now</Button>
    </header>
  )
}

export default Header
