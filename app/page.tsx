"use client"

import { useState } from "react";
import HeaderComponent from "@/app/_components/header";
import Image from "next/image";
import { Button } from "./_components/ui/button";

export default function Home() {
  // Estado para controlar o tema (modo escuro ou claro)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
      <HeaderComponent />
      <main className="flex items-center justify-evenly mt-12 flex-col p-5 xl:flex-row">
        <Image src='/MainMarket.svg' alt="imagem principal" width={400} height={400} />
        <div className="hidden md:inline">
          <h1 className="text-xl mb-2">Alavanque seus <span className="text-xl font-bold">negócios!</span></h1>
          <h2 className="text-lg">
            Está com dificuldade em vender, captar leads,<br />conquistar clientes e alavancar seu negócio, né?
            <br />Mude para uma estratégia assertiva com a <span className="text-lg font-extrabold text-violet-600">BOLD.</span>
          </h2>
          <a href="https://wa.me/11933255476">
            <Button className="mt-5 w-60 h-10">Lucrar agora!</Button>
          </a>
        </div>

        {/* DIV DO CELULAR (Mobile View) */}
        <div className="flex items-center justify-center flex-col mt-4 p-4 inline xl:hidden sm:hidden">
          <h1 className="text-xl mb-1">Alavanque seus <span className="text-xl font-bold">negócios!</span></h1>
          <h2 className="text-lg">
            COM A <span className="text-lg font-extrabold text-violet-600">BOLD COMPANY.</span>
          </h2>
          <a href="https://wa.me/11933255476">
            <Button className="mt-3 w-60 h-10">Lucrar agora!</Button>
          </a>
        </div>
      </main>

      {/* Botão fixo no canto direito */}
      <div className="fixed top-28 right-0 mr-4 hidden md:block">
        <Button onClick={toggleTheme} className="w-40 h-10 rounded-full p-4">
          {isDarkMode ? "Modo Claro" : "Modo Escuro"}
        </Button>
      </div>
    </div>
  );
}
