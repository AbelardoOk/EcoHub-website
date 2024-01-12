"use client";
import { HouseIcon } from "../../public/house";
import { LeafIcon } from "../../public/leaf";
import { UsersIcon } from "../../public/users";
import { CalendarIcon } from "../../public/calendar-days";
import { CartIcon } from "../../public/cart-shopping";
import { EnterIcon } from "../../public/right-to-bracket";
import { PhoneIcon } from "../../public/phone";
import { LogoIcon } from "../../public/logo";

import { useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <motion.header
      className="fixed flex h-screen flex-col justify-between bg-paleta-verde px-1 py-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ width: "3.5rem" }} // Largura inicial quando não expandido
      animate={{ width: isExpanded ? "10rem" : "3.5rem" }} // Largura durante a transição
      transition={{ duration: 0.3 }} // Duração da transição
    >
      <div className="flex flex-col align-middle font-sans font-semibold text-paleta-marrom">
        <a
          href="#home"
          className="flex flex-row gap-2 p-2 transition-all ease-in-out hover:text-paleta-bege"
        >
          <HouseIcon />
          {isExpanded && <p className="">Menu</p>}
        </a>
        <a
          href="#dicas"
          className="flex flex-row gap-2 p-2  transition-all ease-in-out hover:text-paleta-bege"
        >
          <LeafIcon />
          {isExpanded && <p className="">Dicas</p>}
        </a>
        <a
          href="#comunidade"
          className="flex flex-row gap-2 p-2  transition-all ease-in-out hover:text-paleta-bege"
        >
          <UsersIcon altura={24} largura={24} />
          {isExpanded && <p className="">Comunidades</p>}
        </a>
        <a className="flex flex-row gap-2 p-2  transition-all ease-in-out hover:text-paleta-bege">
          <CalendarIcon />
          {isExpanded && <p className="">Calendario</p>}
        </a>
        <a className="flex flex-row gap-2 p-2  transition-all ease-in-out hover:text-paleta-bege">
          <CartIcon />
          {isExpanded && <p className="">Carrinho</p>}
        </a>
        <a className="flex flex-row gap-2 p-2 transition-all ease-in-out hover:text-paleta-bege">
          <EnterIcon />
          {isExpanded && <p className="">Login</p>}
        </a>
        <a className="flex flex-row gap-2 p-2 transition-all ease-in-out hover:text-paleta-bege">
          <PhoneIcon />
          {isExpanded && <p className="">Contato</p>}
        </a>
      </div>
      <div className="flex flex-row gap-2 p-2">
        <LogoIcon altura={24} largura={24} />
        {isExpanded && <p className=" font-alt">Ecohub</p>}
      </div>
    </motion.header>
  );
}
