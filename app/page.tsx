"use client";

import HeaderComponent from "@/app/_components/header";
import Image from "next/image";
import { Button } from "./_components/ui/button";
import ComponentContact from "./_components/contact";
import ComponentService from "./_components/card-service-item";
import SmoothScrollLinks from "../app/_components/scroll"

export default function Home() {
 
  return (
    <div>

      <SmoothScrollLinks/>
      {/* HEADER COMPONENT */}
      <HeaderComponent />

      {/* COMPONENT MAIN */}
      <main className="flex items-center justify-evenly mt-12 flex-col p-5 xl:flex-row">
        <Image src="/MainMarket.svg" alt="imagem principal" width={400} height={400} />
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
        <div className="flex items-center justify-center flex-col mt-4 p-4 xl:hidden sm:hidden">
          <h1 className="text-xl mb-1">Alavanque seus <span className="text-xl font-bold">negócios!</span></h1>
          <h2 className="text-lg">
            COM A <span className="text-lg font-extrabold text-violet-600">BOLD COMPANY.</span>
          </h2>
          <a href="https://wa.me/11933255476">
            <Button className="mt-3 w-60 h-10">Lucrar agora!</Button>
          </a>
        </div>
      </main>

      {/* COMPONENT ABOUT */}
      <div className="flex flex-col items-center p-5 justify-center" id="sobre">
        <div className="h-[360px]">
          <Image src="/about.png" alt="sobre nós" height={400} width={400} />
        </div>

        <div className="flex items-center justify-center gap-11 flex-col md:flex-row">
          <div className="bg-zinc-300 p-7 h-96 w-80 flex items-center justify-center flex-col rounded-xl">
            <h1 className="text-xl font-semibold mb-6">Missão</h1>
            <p className="text-base">Nossa missão vai além de simplesmente oferecer serviços – nossa missão é estar ao seu lado em cada passo da sua jornada. Estamos aqui para pegar na sua mão, ouvir suas necessidades e guiá-lo com estratégia e dedicação. Vamos te ajudar a conquistar resultados extraordinários!</p>
          </div>

          <div className="bg-zinc-300 p-7 h-96 w-80 flex items-center justify-center flex-col rounded-xl">
            <h1 className="text-xl font-semibold mb-6">Visão</h1>
            <p>Nossa visão é transformar a maneira como as empresas se conectam com o mercado, criando estratégias inovadoras que vão além do convencional. Queremos ser a força que impulsiona o seu crescimento, a chave que desbloqueia um futuro mais próspero e cheio de oportunidades.</p>
          </div>

          <div className="bg-zinc-300 p-7 w-80 h-96 flex items-center justify-center flex-col rounded-xl">
            <h1 className="text-xl font-semibold mb-6">Valores</h1>
            <p>Em tudo o que fazemos, acreditamos que o sucesso verdadeiro nasce da empatia. Nossa missão é sempre entender de forma profunda as necessidades dos nossos clientes, pois sabemos que cada negócio é único. Por isso, oferecemos soluções personalizadas!</p>
          </div>
        </div>
      </div>

      {/* COMPONENT LUCRAR */}
      <div className="p-8" id="lucrar">
        <div className="flex items-center justify-center">
          <Image src='/lucrar.png' alt="venha lucrar" height={330} width={330}/>
        </div>

        <div className="flex justify-center mt-12">
          <ComponentService/>
        </div>
      </div>

       {/* COMPONENT CONTACT US */}
       <div className="flex flex-col items-center justify-center p-5 pt-16" id="contato">
        <div>
          <Image src='/contact_us.png' alt="contato" height={350} width={350}/>
        </div>

        <div>
          <ComponentContact/>
        </div>
      </div>

    </div>
  );
}
