"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import "../../app/globals.css";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation"


const ComponentService = () => {

  const router = useRouter();

  const handleWebSite = () => {
    router.push('/pages/website')
  }

  const handleTrafego = () => {
    router.push('/pages/campanha')
  }

  const handleDesign = () => {
    router.push('/pages/design')
  }

  const handleCopy = () => {
    router.push('/pages/copywriting')
  }

  const handleMedia = () => {
    router.push('/pages/social&media')
  }

  const handleMarketing = () => {
    router.push('/pages/marketing')
  }

  return (
    <div className="flex justify-center items-center grid grid-cols-1 gap-7 md:grid-cols-3 flex justify-center items-center">
    
      <Card className="relative h-full md:h-[70vh]">
        <CardContent>
          <div className="mb-5 h-56 items-center justify-center">
            <Image
              className="mt-[-15px]"
              src="/website.png"
              alt="website"
              height={300}
              width={300}
            />
          </div>

          <div className="flex flex-col mt-9">
            <h1 className="truncate text-xl font-bold">
              Criação de Website
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1">
              Criação de Websites, sites institucionais, lojas virtuais para
              converter vendas, e landing pages que geram resultados...
            </p>
          </div>

          <div className="flex mt-14">
            <Button onClick={handleWebSite} className="w-44 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="relative h-full md:h-[70vh]">
        <CardContent>
          <div className="top-0 mb-5 flex justify-center">
            <Image src="/trafego.png" alt="trafego pago" className="h-56" width={250} height={400}/>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold truncate">
              Campanha e Tráfego Pago
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1">
                Impulsione seu negócio com campanhas no Google e tráfego pago! Alcance o público certo e aumente suas vendas!
            </p>
          </div>

          <div className="flex mt-14">
            <Button onClick={handleTrafego} className="w-44 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
          </div>
          
        </CardContent>
      </Card>

      <Card className="relative h-full md:h-[70vh]">
        <CardContent>
          <div className="top-0 mb-5 flex justify-center">
            <Image src="/design.png" alt="design" className="h-56" width={200} height={400}/>
          </div>

          <div className="flex flex-col">
            <h1 className="truncate text-xl font-bold">
              Identidade Visual e Design
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1">
                Transforme sua marca com uma identidade visual única! Criamos designs exclusivos e logos chamativas.
            </p>
          </div>

          <div className="flex mt-14">
            <Button onClick={handleDesign} className="w-44 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
          </div>
          
        </CardContent>
      </Card>

      <Card className="relative h-full md:h-[70vh]">
        <CardContent>
          <div className="mb-5 h-56 items-center justify-center">
            <Image
              className="mt-[-18px]"
              src="/social.png"
              alt="social media"
              height={300}
              width={300}
            />
          </div>

          <div className="flex flex-col mt-11">
            <h1 className="truncate text-xl font-bold">
              Gestão de Social Media
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1">
            Gerenciamento estratégico de redes sociais, com criação de conteúdos impactantes e personalizados.
            </p>
          </div>

          <div className="flex mt-14">
            <Button onClick={handleMedia} className="w-44 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
          </div>
          
        </CardContent>
      </Card>

      <Card className="relative h-full md:h-[70vh]">
        <CardContent>
          <div className="top-0 mb-1 flex justify-center mt-4">
            <Image src="/consult.png" alt="consultoria de marketing" className="h-56" width={230} height={300} />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold truncate">
              Consultoria de Marketing
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1">
            Orientação especializada para otimizar campanhas, fortalecer sua marca e alcançar melhores resultados. </p>
          </div>

          <div className="flex flex-row gap-52 mt-14 justify-between">
            <div>
              <Button onClick={handleMarketing} className="w-40 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
            </div>
            <div className="">
              <a href="https://w.app/boldcompany">
                <Button className="w-20 bottom-0 mb-4 absolute right-0 mr-5 md:mr-5">Grátis!</Button>
              </a>
            </div>
         
          </div>
         
        </CardContent>
      </Card>

      <Card className="relative h-full md:h-[70vh]">
        <CardContent>
          <div className="top-0 mb-5 flex justify-center h-56">
            <Image src="/copy.png" alt="Técnicas de Copywriting!" width={250} height={400}/>
          </div>

          <div className="flex flex-col">
            <h1 className="truncate text-xl font-bold">
              Técnicas de Copywriting!
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1">
            Foco em headlines impactantes, storytelling envolvente e chamadas para ação irresistíveis que impulsionam vendas.</p>
          </div>

          <div className="flex mt-14">
            <Button onClick={handleCopy} className="w-44 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
          </div>
          
        </CardContent>
      </Card>
    </div>
  );
};

export default ComponentService;
