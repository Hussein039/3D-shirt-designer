import React from 'react';
import { motion } from "framer-motion";
import { slideAnimation, } from "../config/motion";

const Navbar = () => {
  return (
    <nav className=" text-black flex justify-around items-center bg-indigo-600 bg-opacity-0 bg-gradient-to-r from-cyan-200 to-indigo-200" >
          <motion.header {...slideAnimation("down")}>
            <img
              src="./logo.png"
              alt="logo"
              className="w-20 h-30 object-contain"
            />
          </motion.header>
          <motion.header {...slideAnimation("left")}>
          <div className="flex space-x-20">
            <a href="https://github.com/Hussein039" class="fa-brands fa-github text-3xl cursor-pointer"/>
            <a href="https://www.linkedin.com/in/hussein-saadol/" class="fa-brands fa-linkedin text-3xl cursor-pointer"/>
            <a href="mailto:husseinsaad123123@gmail.com" class="fa-regular fa-envelope text-3xl cursor-pointer"></a>
        </div>
        </motion.header>
    </nav>
  );
}

export default Navbar;
