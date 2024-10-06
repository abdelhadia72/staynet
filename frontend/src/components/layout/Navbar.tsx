"use client";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserPlus, LogIn, Menu, X, Languages } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-[1200px] px-4 py-3 flex justify-between items-center">
        <div className="logo flex justify-start items-center gap-2">
          <Link
            href="/"
            className="text-dark-color flex items-center text-xl font-bold"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl ml-2 text-main-color">Shari</span>
          </Link>
          <Badge className="rounded-full text-dark-color bg-yellow-400 hover:bg-yellow-500 shadow-sm transition-all duration-300">
            Beta
          </Badge>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-6 mr-6">
            {["Renting", "Selling", "Buying", "About"].map((item) => (
              <li key={item}>
                <Link href="#" className="relative overflow-hidden group py-2">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-main-color">
                    {item}
                  </span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-main-color transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-px bg-gray-300 mx-4"></div>
          <Link href="/login">
            <Button className="rounded-full mr-2 bg-transparent text-main-color border-2 border-main-color hover:bg-main-color hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-main-color focus:ring-opacity-50">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </Link>
          <Select>
            <SelectTrigger className="w-[130px] rounded-full bg-transparent text-main-color border-2 border-main-color hover:bg-main-color hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-main-color focus:ring-opacity-50">
              <Languages className="mr-2 h-4 w-4" />
              <SelectValue placeholder="language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>
                <SelectItem value="ar">Arabic</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-4">
              {["Renting", "Selling", "Buying", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="block py-2 text-lg hover:text-main-color transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 p-4">
              <Button className="w-full justify-center rounded-full bg-transparent text-main-color border-2 border-main-color hover:bg-main-color hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-main-color focus:ring-opacity-50">
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
