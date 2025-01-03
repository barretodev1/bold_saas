"use client";

import Image from "next/image";
import React from "react";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [areServicesOpen, setAreServicesOpen] = React.useState(false);
  const [areCasesOpen, setAreCasesOpen] = React.useState(false);
  const [areContactOpen, setAreContactOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <>
      {/* Header para PC */}
      <header
        className="hidden md:flex bg-zinc-300 border-b border items-center w-full p-4 justify-center md:justify-between"
        id="home"
      >
        <div>
          <Image src="/logo.webp" alt="logo bold" width={150} height={150} />
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
          <li>
            <a
              className="text-black font-semibold hover:text-violet-600 transition-all"
              href="#cases"
            >
              Cases
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
      <header className="flex items-center bg-zinc-300 p-4 inline md:hidden">
        <nav className="flex items-center justify-center relative">
          {/* Botão para abrir o menu principal */}
          <button
            onClick={toggleMenu}
            className="p-2 border rounded flex items-center justify-center bg-gray-700 text-white"
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
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-500 ease-in-out z-10`}
          >
            <button
              onClick={toggleMenu}
              className="px-5 py-2 rounded-full m-4 bg-gray-600"
            >
              Fechar
            </button>

            {/* Dropdown de Serviços */}
            <div className="relative">
              <button
                onClick={() => setAreServicesOpen(!areServicesOpen)}
                className="flex items-center justify-between w-full text-left py-2 px-4 hover:bg-gray-700"
                aria-expanded={areServicesOpen}
                aria-controls="services-menu"
              >
                <span>Serviços</span>
                <span
                  className={`ml-2 border-solid border-r-2 border-t-2 w-2 h-2 transform transition-transform duration-300 ${
                    areServicesOpen ? "rotate-45" : "-rotate-45"
                  }`}
                ></span>
              </button>
              <div
                id="services-menu"
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  areServicesOpen ? "max-h-screen" : "max-h-0"
                } bg-gray-800 shadow-md rounded`}
              >
                <a
                  href="https://boldcompany.netlify.app/pages/website"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm py-2 px-4 hover:bg-gray-700"
                >
                  WebSite
                </a>
                <a
                  href="https://boldcompany.netlify.app/pages/campanha"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm py-2 px-4 hover:bg-gray-700"
                >
                  Campanha
                </a>
                <a
                  href="https://boldcompany.netlify.app/pages/design"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm py-2 px-4 hover:bg-gray-700"
                >
                  Design
                </a>
                <a
                  href="https://boldcompany.netlify.app/pages/social&media"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm py-2 px-4 hover:bg-gray-700"
                >
                  Social Media
                </a>
                <a
                  href="https://boldcompany.netlify.app/pages/marketing"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm py-2 px-4 hover:bg-gray-700"
                >
                  Marketing
                </a>
                <a
                  href="https://boldcompany.netlify.app/pages/copywriting"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm py-2 px-4 hover:bg-gray-700"
                >
                  Copy
                </a>
              </div>
            </div>

            {/* Dropdown de Cases */}
            <div className="relative">
              <button
                onClick={() => setAreCasesOpen(!areCasesOpen)}
                className="flex items-center justify-between w-full text-left py-2 px-4 hover:bg-gray-700"
                aria-expanded={areCasesOpen}
                aria-controls="cases-menu"
              >
                <span>Cases</span>
                <span
                  className={`ml-2 border-solid border-r-2 border-t-2 w-2 h-2 transform transition-transform duration-300 ${
                    areCasesOpen ? "rotate-45" : "-rotate-45"
                  }`}
                ></span>
              </button>
              <div
                id="cases-menu"
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  areCasesOpen ? "max-h-screen" : "max-h-0"
                } bg-gray-800 shadow-md rounded`}
              >
                <a
                  href="https://boldcompany.netlify.app/pages/saiba-mais/rarity"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm py-2 px-4 hover:bg-gray-700"
                >
                  Rarity
                </a>
                <a
                  href="https://boldcompany.netlify.app/pages/saiba-mais/uhn-store"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm py-2 px-4 hover:bg-gray-700"
                >
                  UHN Store
                </a>
                <a
                  href="https://boldcompany.netlify.app/pages/cases/fsw-barber"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm py-2 px-4 hover:bg-gray-700"
                >
                  FSW Barber
                </a>
                <a
                  href="https://boldcompany.netlify.app/pages/cases/hub-food"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm py-2 px-4 hover:bg-gray-700"
                >
                  Hub Food!
                </a>
              </div>
            </div>

            {/* Dropdown de Contato */}
            <div className="relative">
              <button
                onClick={() => setAreContactOpen(!areContactOpen)}
                className="flex items-center justify-between w-full text-left py-2 px-4 hover:bg-gray-700"
                aria-expanded={areContactOpen}
                aria-controls="cases-menu"
              >
                <span>Contato</span>
                <span
                  className={`ml-2 border-solid border-r-2 border-t-2 w-2 h-2 transform transition-transform duration-300 ${
                    areContactOpen ? "rotate-45" : "-rotate-45"
                  }`}
                ></span>
              </button>
              <div
                id="cases-menu"
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  areContactOpen ? "max-h-screen" : "max-h-0"
                } bg-gray-800 shadow-md rounded`}
              >
                <a
                  href="https://www.instagram.com/oboldcompany"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm text-sm py-2 px-4 hover:bg-gray-700"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/11933255476"
                  className="block text-sm font-normal text-zinc-400 font-bold text-sm text-sm py-2 px-4 hover:bg-gray-700"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
