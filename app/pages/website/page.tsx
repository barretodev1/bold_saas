import ComponentFooter from "@/app/_components/footer";
import HeaderCell from "@/app/_components/headerCell";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { CircleCheckBigIcon, CircleMinusIcon } from "lucide-react";
import Image from "next/image";

const WebSitePage = () => {
  return (
    <>
      <HeaderCell />

      <div className="flex mt-8 px-10  hidden md:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-black font-bold"
                href="https://boldcompany.netlify.app"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-zinc-700 font-bold">
                Website
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="p-8 mt-1" id="lucrar">
        <div className="flex justify-center items-center grid grid-cols-1 gap-7 md:grid-cols-3 flex justify-center items-center">
          <Card className="relative h-full md:h-full">
            <CardContent>
              <div className="top-0 flex justify-center">
                <Image
                  className="mt-[-15px]"
                  src="/website.png"
                  alt="landing page"
                  height={250}
                  width={250}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="truncate text-xl mb-3 font-bold">
                  Landing Page.
                </h1>

                <div>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Domínio grátis por 1 ano
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Captação de Leads Qualificados
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Otimização para SEO
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Design Responsivo
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Botão de Contato Direto
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Mapas e Localização Integrados
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Velocidade de Navegação Otimizada
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Acompanhamento Profissional
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Compra direta pelo site
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Pagamento Seguro com Várias Opções
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Promoções Personalizadas
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Suporte Técnico Especializado
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243247402781051">
                  <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                    Quero lucrar!
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="relative h-full md:h-full">
            <CardContent className="">
              <div className="top-0 mb-2 flex justify-center">
                <Image
                  src="/virtualshop.png"
                  alt="Site institucional"
                  className="h-56"
                  width={250}
                  height={500}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl mb-3 font-bold truncate">
                  Site Institucional.
                </h1>

                <div>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Domínio grátis por 1 ano
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Captação de Leads Qualificados
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Otimização para SEO
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Design Responsivo
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Botão de Contato Direto
                  </p>
                  <p className="flex flex-row gap-2   items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Mapas e Localização Integrados
                  </p>
                  <p className="flex flex-row gap-2   items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Velocidade de Navegação Otimizada
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Acompanhamento Profissional
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Compra direta pelo site
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Pagamento Seguro com Várias Opções
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Promoções Personalizadas
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Suporte Técnico Especializado
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243247402781051">
                  <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                    Quero lucrar!
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="relative h-full md:h-full">
            <CardContent>
              <div className="top-0 mb-2 flex justify-center">
                <Image
                  src="/institucional.png"
                  alt="Loja virtual"
                  className="h-56"
                  width={230}
                  height={400}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="truncate mb-3 text-xl font-bold">
                  Loja Virtual.
                </h1>

                <div>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Domínio grátis por 1 ano
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Captação de Leads Qualificados
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Otimização para SEO
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Design Responsivo
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Botão de Contato Direto
                  </p>
                  <p className="flex flex-row gap-2   items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Mapas e Localização Integrados
                  </p>
                  <p className="flex flex-row gap-2   items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Velocidade de Navegação Otimizada
                  </p>
                  <p className="flex flex-row gap-2   items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Acompanhamento Profissional
                  </p>
                  <p className="flex flex-row gap-2   items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Compra direta pelo site
                  </p>
                  <p className=" flex flex-row gap-2   items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Pagamento Seguro com Várias Opções
                  </p>
                  <p className="flex flex-row gap-2   items-center">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Promoções Personalizadas
                  </p>
                  <p className="flex flex-row gap-2   items-center">
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

      <ComponentFooter/>
    </>
  );
};

export default WebSitePage;
