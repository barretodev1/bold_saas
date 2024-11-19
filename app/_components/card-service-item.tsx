import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import "../../app/globals.css";
import { Button } from "./ui/button";

const ComponentService = () => {
  return (
    <div className="flex justify-center items-center grid grid-cols-1 gap-6 md:grid-cols-3 flex justify-center items-center">
    
      <Card className="relative w-96 h-[72vh] md:h-[70vh]">
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

          <Button className="w-44 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
        </CardContent>
      </Card>

      <Card className="relative w-96 h-[72vh] md:h-[70vh]">
        <CardContent>
          <div className="top-0 mb-5 flex justify-center">
            <img src="/trafego.png" alt="trafego pago" className="h-56" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold truncate">
              Campanha e Tráfego Pago
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1">
                Impulsione seu negócio com campanhas no Google e tráfego pago! Alcance o público certo e aumente suas vendas!
            </p>
          </div>

          <Button className="w-44 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
        </CardContent>
      </Card>

      <Card className="relative w-96 h-[72vh] md:h-[70vh]">
        <CardContent>
          <div className="top-0 mb-5 flex justify-center">
            <img src="/design.png" alt="website" className="h-56" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold">
              Identidade Visual e Design
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1">
                Transforme sua marca com uma identidade visual única! Criamos designs exclusivos e logos chamativas, que se conectam com seu cliente...
            </p>
          </div>

          <Button className="w-44 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
        </CardContent>
      </Card>

      <Card className="relative w-96 h-[72vh] md:h-[70vh]">
        <CardContent>
          <div className="mb-5 h-56 items-center justify-center">
            <Image
              className="mt-[-18px]"
              src="/social.png"
              alt="website"
              height={300}
              width={300}
            />
          </div>

          <div className="flex flex-col mt-11">
            <h1 className="truncate text-xl font-bold">
              Gestão de Social Media
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1">
            Gerenciamento estratégico de redes sociais, com criação de conteúdos impactantes e personalizados para engajar o público...
            </p>
          </div>

          <Button className="w-44 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
        </CardContent>
      </Card>

      <Card className="relative w-96 h-[72vh] md:h-[70vh]">
        <CardContent>
          <div className="top-0 mb-1 flex justify-center mt-4">
            <img src="/consult.png" alt="trafego pago" className="h-56" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold truncate">
              Consultoria de Marketing
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1">
            Orientação especializada para otimizar campanhas, fortalecer sua marca e alcançar melhores resultados. </p>
          </div>

          <Button className="w-44 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
        </CardContent>
      </Card>

      <Card className="relative w-96 h-[72vh] md:h-[70vh]">
        <CardContent>
          <div className="top-0 mb-5 flex justify-center h-56">
            <img src="/copy.png" alt="website" className="h-60" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold">
              Técnicas de Copywriting!
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1">
            Foco em headlines impactantes, storytelling envolvente e chamadas para ação irresistíveis que impulsionam vendas.</p>
          </div>

          <Button className="w-44 bottom-0 mb-4 absolute bg-violet-600">Quero lucrar!</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComponentService;