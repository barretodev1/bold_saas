"use client";

import "./rarity.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import ComponentFooter from "@/app/_components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CircleCheckBigIcon } from "lucide-react";
import HeaderCell from "@/app/_components/headerCell";

const RarityPage = () => {
  useEffect(() => {
    AOS.init(); // Inicializa o AOS
  }, []);

  return (
    <>
      <HeaderCell />

      <div className="principal  relative flex flex-col items-center w-full justify-center overflow-hidden">
        <div className="flex px-4 ml-[3%] mt-6 absolute top-0 left-0 md:ml-[11%]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-white"
                  href="https://boldcompany.netlify.app"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
              <BreadcrumbLink
                className="text-white"
                href="/pages/cases"
              >
                Cases
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-zinc-400">
                  Rarity
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="absolute px-4 flex flex-col mt-10 left-0 w-full hidden md:block">
          <h1 className="w-full flex font-bold text-white text-xl ml-[3%] md:ml-[11%] mt-16">
            Rarity: Website
          </h1>
          <h2 className="relative mb-20 left-0 text-sm' font-normal text-white mt-1 ml-[3%] md:ml-[11%]">
            O mercado tecnológico é altamente competitivo<br></br> no mercado.
            Para a Rarity, a Bold Company realizou<br></br>um website e
            otimização para ranqueamento (SEO)<br></br>e aumentar o tráfego
            orgânicamente e guiar os usuários<br></br> em todas as etapas da
            jornada de compra.
          </h2>
          <h1 className="relative left-0 w-full flex font-extrabold text-white text-xl ml-[3%] md:ml-[11%]">
            Rarity
          </h1>
          <h2 className="relative left-0 mb-3 text-base font-normal text-white ml-[3%] md:ml-[11%]">
            Startup de tecnologia
          </h2>
          <a
            data-aos="fade-right"
            href="https://raritytech.netlify.app/"
            className="bg-violet-600 mt-3 p-2 w-40 items-center justify-center rounded-full relative flex left-0 text-base font-semibold hover:bg-violet-950 transition-all text-white mt-1 ml-[3%] md:ml-[11%]"
          >
            Conferir
          </a>
        </div>

        <div className="absolute px-4 flex flex-col mt-4 left-0 w-full block md:hidden">
          <h1 className="w-full flex font-bold text-white text-xl ml-[3%] md:ml-[11%]">
            Rarity: Tráfego Pago
          </h1>
          <h2 className="relative mb-4 left-0 text-sm' font-normal text-white mt-1 ml-[3%] md:ml-[11%]">
            O mercado tecnológico é altamente competitivo no mercado. Para a
            Rarity, a Bold Company realizou um website e otimização para
            ranqueamento (SEO) e aumentar o tráfego orgânicamente e guiar os
            usuários em todas as etapas da jornada de compra.
          </h2>
          <h1 className="relative left-0 w-full flex font-extrabold text-white text-xl ml-[3%] md:ml-[11%]">
            Rarity
          </h1>
          <h2 className="relative left-0 mb-2 text-base font-normal text-white ml-[3%] md:ml-[11%]">
            Start-up de Tecnologia
          </h2>
          <a
            href="https://raritytech.netlify.app/"
            className="bg-white text-black mt-4 p-2 w-40 items-center justify-center rounded-full relative flex left-0 text-base font-semibold transition-all mt-4 ml-[3%] md:ml-[11%] bg-white"
          >
            Conferir
          </a>
        </div>
      </div>

      <div className="flex flex-col px-4 py-14">
        <div className="flex flex-col gap-9">
          {/* CASO */}
          <div
            data-aos="fade-up"
            className="flex flex-col gap-3 ml-[3%] md:ml-[11%]"
          >
            <h1 className="w-full flex text-3xl font-bold text-black">Caso</h1>
            <p className="text-sm font-normal text-zinc-600 mt-1 hidden md:block">
              A Rarity começou apenas com um Instagram em 2023, e começou a
              perder vendas e<br></br> captação de leads, pois não tinham uma
              forma de contatar lead, nem mesmo mostrar<br></br> o seu
              profissionalismo, até que criamos um website para a Rarity, e
              resolvemos o seu<br></br> problema...
            </p>
            <p className="text-sm font-normal text-zinc-600 mt-1 block md:hidden">
              A Rarity começou apenas com um Instagram em 2023, e começou a
              perder vendas e captação de leads, pois não tinham uma forma de
              contatar lead, nem mesmo mostrar o seu profissionalismo, até que
              criamos um website para a Rarity, e resolvemos o seu problema...
            </p>
          </div>

          {/* SOLUÇÃO */}
          <div
            data-aos="fade-up"
            className="flex flex-col gap-3 ml-[3%] md:ml-[11%]"
          >
            <h1 className="w-full flex text-3xl font-bold text-black">
              Solução
            </h1>
            <p className="text-sm font-normal text-zinc-600 mt-1 hidden md:inline">
              Ao contratar a Bold Company, desenvolvemos um software/website,
              onde otimizamos<br></br> a sua produção e captação de leads.
              Realizamos uma landing page, (Página única),<br></br> onde o
              cliente pagou um valor abaixo da média do mercado, e começou a
              competir com<br></br> os médios/grandes do mercado da tecnologia,
              redes e infraestrutura.
            </p>
            <p className="text-sm font-normal text-zinc-600 mt-1 inline md:hidden">
              Ao contratar a Bold Company, desenvolvemos um software/website,
              onde otimizamos a sua produção e captação de leads. Realizamos uma
              landing page, (Página única), onde o cliente pagou um valor abaixo
              da média do mercado, e começou a competir com os médios/grandes do
              mercado da tecnologia, redes e infraestrutura.
            </p>
          </div>

          {/* RESULTADO */}
          <div
            data-aos="fade-up"
            className="flex flex-col gap-3 ml-[3%] md:ml-[11%]"
          >
            <h1 className="w-full flex text-3xl font-bold text-black">
              Resultados
            </h1>

            <div>
              {/* Versão para desktop */}
              <div className="hidden md:block">
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Tráfego na Startup: Crescimento de 230%, com clientes
                    diretos que realmente buscavam os serviços prestados pela
                    Rarity.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Taxa de Conversão: Aumento de 10% para 19%, resultado da
                    captação de leads, através do website.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Faturamento Mensal: Quadruplicou, ultrapassando R$ 48 mil em
                    vendas.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Redução do Custo por Conversão: O custo caiu pela metade
                    devido à otimização de leads através do próprio site.
                  </span>
                </p>
              </div>

              {/* Versão para celular */}
              <div className="block md:hidden">
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>Tráfego no Startup: Crescimento de 230%</span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>Taxa de Conversão: Aumento de 19%</span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>Faturamento Mensal: Quadruplicou.</span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>Redução do Custo: Caiu pela metade</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ComponentFooter />
    </>
  );
};

export default RarityPage;
