import HeaderComponent from "@/app/_components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeaderComponent/> 
      <main className="flex items-center justify-center mt-7">
        <Image src='/MainMarket.svg' alt="imagem principal" width={400} height={400}/>
        <div>
          <h1>Alavanque neus <span className="text-lg font-bold text-black">negócios!</span></h1>
          <h2>
            Está com dificuldade em vender, captar leads,<br></br>consquistar clientes e alavancar seu negóicio, né?
            <br></br>Mude para uma estratégia assertiva com a <span className="text-lg font-bold text-violet-600">BOLD.</span>
          </h2>
        </div>
      </main> 
   </div>
  );
}
