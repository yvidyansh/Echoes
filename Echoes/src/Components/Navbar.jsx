import { useState } from "react"
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setopen] = useState(false);
  console.log(import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex  items-center gap-4 text-2xl font-bold">
          <Image src="echoesIco.webp" className="w-8 h-8"/>
          <span>echoes</span>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* button ≡ */}
          <div className="cursor-pointer text-3xl p-3" onClick={() => setopen(!open)}>
            {open ? "X" : "≡"}
          </div>
          {/* Mobile List */}
          <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#e6e6ff] transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"} `}>
            <Link to='/'>Home</Link>
            <Link to='/'>Trending</Link>
            <Link to='/'>Most Popular</Link>
            <Link to='/'>About</Link>
            <Link to='/'>
              <button className="py-2 px-4 rounded-3xl bg-teal-600 text-white">Login 👋</button>
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
          <Link to='/'>Home</Link>
          <Link to='/'>Trending</Link>
          <Link to='/'>Most Popular</Link>
          <Link to='/'>About</Link>
          
          <SignedOut>
            <Link to='/login'>
              <button className="py-2 px-4 rounded-3xl bg-teal-600 text-white">Login👋</button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

    </div>
  )
}

export default Navbar
