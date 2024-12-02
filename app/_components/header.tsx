'use client';

import Image from "next/image";
import { useState } from 'react';

export default function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
  return (
    <>
      {/* Header para PC */}
      <header
        className="hidden md:flex bg-zinc-300 border-b border items-center w-full p-4 justify-center md:justify-between"
        id="home"
      >
        <div>
          <Image src="/logo.webp" alt="logo" width={150} height={150} />
        </div>

        <ul className="gap-4 flex flex-row items-center mr-2 font-semibold">
          <li>
            <a
              className="text-black font-semibold hover:text-violet-600 transition-all"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-black font-semibold hover:text-violet-600 transition-all"
              href="#sobre"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              className="text-black font-semibold hover:text-violet-600 transition-all"
              href="#contato"
            >
              Contato
            </a>
          </li>
          <a
            className="flex justify-center cursor-pointer rounded-full bg-violet-600 p-2 w-36 font-normal text-white hover:bg-violet-500 transition-all"
            href="#lucrar"
          >
            Lucrar!
          </a>
        </ul>
      </header>

      {/* Header para celular */}
      <header className="bg-zinc-300 border-b w-full p-4">
      <nav className="relative">
        {/* Botão para abrir o menu */}
        <button
          onClick={toggleMenu}
          className="p-2 border rounded bg-gray-700 text-white"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>

        {/* Menu deslizante */}
        <div
          id="nav-menu"
          className={`fixed top-0 right-0 h-full w-64 bg-dark text-white transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out z-10`}
        >
          <button
            onClick={toggleMenu}
            className="px-5 py-2 rounded-full m-4 bg-gray-600"
          >
            Fechar
          </button>
          <a href="https://boldcompany.netlify.app/pages/website" className="block py-2 px-4 hover:bg-gray-700">
            WebSite
          </a>
          <a href="https://boldcompany.netlify.app/pages/campanha" className="block py-2 px-4 hover:bg-gray-700">
            Campanha
          </a>
          <a href="https://boldcompany.netlify.app/pages/design" className="block py-2 px-4 hover:bg-gray-700">
            Design
          </a>
          <a href="https://boldcompany.netlify.app/pages/social&media" className="block py-2 px-4 hover:bg-gray-700">
            Social Media
          </a>
          <a href="https://boldcompany.netlify.app/pages/marketing" className="block py-2 px-4 hover:bg-gray-700">
            Marketing
          </a>
          <a href="https://boldcompany.netlify.app/pages/copywriting" className="block py-2 px-4 hover:bg-gray-700">
            Copy
          </a>
        </div>
      </nav>
    </header>
    </>
  );
}
