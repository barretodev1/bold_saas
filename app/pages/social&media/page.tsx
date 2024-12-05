"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import { Card, CardContent } from "@/app/_components/ui/card";
import { CircleCheckBigIcon } from "lucide-react";
import Image from "next/image";
import HeaderCell from "@/app/_components/headerCell";
import ComponentFooter from "@/app/_components/footer";

const MarketingPage = () => {
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
                Social Media
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="p-8 mt-1" id="lucrar">
        <div className="flex justify-center items-center grid grid-cols-1 gap-7 md:grid-cols-3 flex justify-center items-center">
          <Card className="relative h-full md:h-full">
            <CardContent>
              <div className="mt-7 ml-5 mb-5 h-56 flex items-center justify-center">
                <Image
                  className=""
                  src="/marketingbasico.png"
                  alt="Plano Basico"
                  height={20}
                  width={250}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="truncate text-xl mb-3 font-bold">
                  Plano BÁSICO.
                </h1>

                <div>
                  <p className="flex flex-row gap-2 items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Gestão no Instagram
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Até 8 postagens por mês.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Criação de artes básica.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Cronograma de postagens.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Relatório de Desempenho.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Interação com Seguidores.
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243265663048662">
                  <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                    Quero lucrar!
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="relative h-full md:h-full">
            <CardContent>
              <div className="mt-7 ml-5 mb-5 h-56 flex items-center justify-center">
                <Image
                  className=""
                  src="/marketingpleno.png"
                  alt="Plano Pleno"
                  height={20}
                  width={250}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="truncate text-xl mb-3 font-bold">
                  Plano PLENO.
                </h1>

                <div>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Gestão no Instagram e Facebook
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Até 15 postagens por mês.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />{" "}
                    Criação de artes intermediárias.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Cronograma de postagens.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />2
                    Relatórios de Desempenho.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />1
                    Interação com Seguidores.
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243265663048662">
                  <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                    Quero lucrar!
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="relative h-full md:h-full">
            <CardContent>
              <div className="mt-7 ml-5 mb-5 h-56 flex items-center justify-center">
                <Image
                  className=""
                  src="/marketingpremium.png"
                  alt="Plano Premium"
                  height={20}
                  width={250}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="truncate text-xl mb-3 font-bold">
                  Plano PREMIUM.
                </h1>

                <div>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Gestão no Instagram, Facebook e TikTok
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Até 25 postagens por mês.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Criação de artes personalizadas.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Cronograma de postagens.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />5
                    Relatórios de Desempenho.
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Campanhas promocionais.
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243265663048662">
                  <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
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

export default MarketingPage;
