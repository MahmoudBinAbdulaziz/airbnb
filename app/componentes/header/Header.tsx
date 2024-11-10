import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "@/public/Airbnb_Logo_Bélo.svg.png";
import "@/app/globals.css";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
function Header() {
  return (
    <header className="z-50 sticky top-0 py-5 bg-white shadow-md">
      <div className="container  grid grid-cols-3">
        <Logo />
        <SearchBar />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
const Logo = () => {
  return (
    <Link href={"/"} className="relative flex items-center my-auto h-10">
      <Image
        className="object-contain object-left "
        fill
        src={img}
        alt="Logo image"
      />
    </Link>
  );
};
