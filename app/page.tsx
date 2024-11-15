import HeaderComponent from "@/app/_components/header";
import Image from "next/image";
import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <div>
      <HeaderComponent/> 
      <main className="flex items-center justify-evenly mt-12 flex-col xl:flex-row">
        <Image src='/MainMarket.svg' alt="imagem principal" width={400} height={400}/>
        <div className="mt-12 hidden md:inline">
          <h1 className="text-xl mb-2">Alavanque neus <span className="text-xl font-bold text-black">negócios!</span></h1>
          <h2 className="text-lg font-">
            Está com dificuldade em vender, captar leads,<br></br>consquistar clientes e alavancar seu negóicio, né?
            <br></br>Mude para uma estratégia assertiva com a <span className="text-lg font-extrabold text-violet-600">BOLD.</span>
          </h2>
          <a href="https://wa.me/11933255476">
            <Button className="mt-5 w-60 h-10">Lucrar agora!</Button>
          </a>
        </div>

        {/* ABAIXO DIV DO CELL */}

        <div className="flex items-center justify-center flex-col mt-4 p-4 inline xl:hidden">
          <h1 className="text-xl mb-1">Alavanque neus <span className="text-xl font-bold text-black">negócios!</span></h1>
          <h2 className="text-lg font-">
            COM A <span className="text-lg font-extrabold text-violet-600">BOLD COMPANY.</span>
          </h2>
          <a href="https://wa.me/11933255476">
            <Button className="mt-3 w-60 h-10">Lucrar agora!</Button>
          </a>
        </div>
      </main> 
   </div>
  );
}
