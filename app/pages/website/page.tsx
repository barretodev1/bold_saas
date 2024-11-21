import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { CircleCheckBigIcon, CircleMinusIcon } from "lucide-react";
import Image from "next/image";

const WebSitePage = () => {
  return (
    <>
      <header
        className="flex bg-zinc-300 border-b border items-center w-full p-4 items-center justify-center"
        id="home"
      >
        <div>
          <Image src="/logo.webp" alt="logo" width={150} height={150} />
        </div>
      </header>

      <div className="p-8 mt-1" id="lucrar">
        <div className="flex justify-center items-center grid grid-cols-1 gap-7 md:grid-cols-3 flex justify-center items-center">
          <Card className="relative h-full md:h-[108vh]">
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
                <h1 className="truncate text-xl mb-5 font-bold">
                  Landing Page.
                </h1>

                <div>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Domínio grátis por 1 ano
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Captação de Leads Qualificados
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Otimização para SEO
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Design Responsivo
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Botão de Contato Direto
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Mapas e Localização Integrados
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Velocidade de Navegação Otimizada
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Acompanhamento Profissional
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Compra direta pelo site
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Pagamento Seguro com Várias Opções
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Promoções Personalizadas
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Suporte Técnico Especializado
                  </p>
                </div>
              </div>

            
            <div className="flex mt-14">
              <a href="https://form.jotform.com/243248742500654">
                <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                  Quero lucrar!
                </Button>
              </a>
            </div>
            
            </CardContent>
          </Card>

          <Card className="relative h-full md:h-[108vh]">
            <CardContent className="">
              <div className="top-0 mb-5 flex justify-center">
                <Image
                  src="/virtualshop.png"
                  alt="loja virtual"
                  className="h-56"
                  width={250}
                  height={500}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl mb-5 font-bold truncate">
                  Site Institucional.
                </h1>

                <div>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Domínio grátis por 1 ano
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Captação de Leads Qualificados
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Otimização para SEO
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Design Responsivo
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Botão de Contato Direto
                  </p>
                  <p className="flex flex-row gap-2 items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Mapas e Localização Integrados
                  </p>
                  <p className="flex flex-row gap-2 items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Velocidade de Navegação Otimizada
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Acompanhamento Profissional
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Compra direta pelo site
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Pagamento Seguro com Várias Opções
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Promoções Personalizadas
                  </p>
                  <p className="flex flex-row gap-2 items-center italic text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Suporte Técnico Especializado
                  </p>
                </div>
              </div>

                         
            <div className="flex mt-14">
              <a href="https://form.jotform.com/243248745332660">
              <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                Quero lucrar!
              </Button>
              </a>
            
            </div>
            </CardContent>
          </Card>

          <Card className="relative h-full md:h-[108vh]">
            <CardContent>
              <div className="top-0 mb-5 flex justify-center">
                <Image
                  src="/institucional.png"
                  alt="design"
                  className="h-56"
                  width={230}
                  height={400}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="truncate mb-5 text-xl font-bold">
                  Loja Virtual.
                </h1>

                <div>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Domínio grátis por 1 ano
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Captação de Leads Qualificados
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Otimização para SEO
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Design Responsivo
                  </p>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Botão de Contato Direto
                  </p>
                  <p className="flex flex-row gap-2 items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Mapas e Localização Integrados
                  </p>
                  <p className="flex flex-row gap-2 items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Velocidade de Navegação Otimizada
                  </p>
                  <p className="flex flex-row gap-2 items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Acompanhamento Profissional
                  </p>
                  <p className="flex flex-row gap-2 items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Compra direta pelo site
                  </p>
                  <p className=" flex flex-row gap-2 items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Pagamento Seguro com Várias Opções
                  </p>
                  <p className="flex flex-row gap-2 items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Promoções Personalizadas
                  </p>
                  <p className="flex flex-row gap-2 items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Suporte Técnico Especializado
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243247402781051">
                  <Button className="w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                    Quero lucrar!
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default WebSitePage;