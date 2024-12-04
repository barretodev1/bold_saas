"use client";

import Header2 from "@/app/_components/header2";
import "../uhn-store/uhn.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import { useRouter } from "next/navigation";
import ComponentFooter from "@/app/_components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircleCheckBigIcon } from "lucide-react";

const RarityPage = () => {

  useEffect(() => {
    AOS.init(); // Inicializa o AOS
  }, []);

  return (
    <>
      <Header2 />

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
                <BreadcrumbPage className="text-zinc-400">
                  UHN Store
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="absolute px-4 flex flex-col mt-4 left-0 w-full">
          <h1 className="w-full flex font-bold text-white text-xl ml-[3%] md:ml-[11%]">
            UHN Store: Tráfego Pago
          </h1>
          <h2 className="relative mb-4 left-0 text-sm' font-normal text-white mt-1 ml-[3%] md:ml-[11%]">
            O mercado de moda fitness é altamente competitivo<br></br> no
            Google. Para a UHN, a Bold Company utilizou<br></br> tráfego pago e
            otimização de palavras-chave<br></br> genéricas para aumentar o
            tráfego e guiar os usuários<br></br> em todas as etapas da jornada
            de compra.
          </h2>
          <h1 className="relative left-0 w-full flex font-extrabold text-white text-xl ml-[3%] md:ml-[11%]">
            UHN Store
          </h1>
          <h2 className="relative left-0 mb-3 text-base font-normal text-white ml-[3%] md:ml-[11%]">
            Loja de Roupa
          </h2>
          <a data-aos="fade-right" href="https://shopee.com.br/uhnstore?entryPoint=ShopBySearch&searchKeyword=uhn%20store" className="bg-violet-600 mt-3 p-2 w-40 items-center justify-center rounded-full relative flex left-0 text-base font-semibold hover:bg-violet-950 transition-all text-white mt-1 ml-[3%] md:ml-[11%]">
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
            <p className="text-sm font-normal text-zinc-600 mt-1 hidden md:inline">
              A UHN Store começou a ser contruída em 2022 e em 2023 ficou
              pronta! Porém, sem vendas,<br></br> com pouco engajamento e
              estacionada, procurou por ajuda, quando nós, da Bold Company,
              <br></br> fizemos um trabalho de tráfego pago muito bem
              estruturado, fazendo com que as vendas e<br></br> o engajamento da
              UHN, triplicassem...
            </p>
            <p className="text-sm font-normal text-zinc-600 mt-1 inline md:hidden">
              A UHN Store começou a ser construída em 2022 e em 2023<br></br>{" "}
              ficou pronta! Porém, sem vendas, com pouco engajamento e<br></br>{" "}
              estacionada, procurou por ajuda, quando nós, da Bold Company,
              <br></br> fizemos um trabalho de tráfego pago muito bem
              estruturado,<br></br> fazendo com que as vendas e o engajamento da
              UHN, triplicassem...
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
              Ao contratar a Bold Company, desenvolvemos uma estratégia de
              tráfego pago altamente<br></br> segmentada. Essa estratégia incluiu:
              Campanhas no Google Ads, Anúncios no Instagram e<br></br> Facebook e Remarketing
              Inteligente para impactar visitantes que acessaram o site, mas
              não<br></br> concluíram a compra, mostrando anúncios personalizados.
            </p>
            <p className="text-sm font-normal text-zinc-600 mt-1 inline md:hidden">
                Ao contratar a Bold Company, desenvolvemos uma estratégia<br></br> de
              tráfego pago altamente segmentada. Essa estratégia incluiu:
              Campanhas no Google Ads, Anúncios no Instagram e Facebook<br></br> e Remarketing
              Inteligente para impactar visitantes que acessaram<br></br> o site, mas
              não concluíram a compra, mostrando alguns anúncios personalizados.
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
            <div className="hidden md:inline">
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    Tráfego no Site: Crescimento de 400%, com visitantes qualificados que realmente se interessavam pelos produtos.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    Taxa de Conversão: Aumento de 3% para 8%, resultado da segmentação assertiva e remarketing.                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  Faturamento Mensal: Triplicou, ultrapassando R$ 100 mil em vendas recorrentes.                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  Redução do Custo por Conversão: O custo caiu pela metade devido à otimização das campanhas e públicos-alvo.                  </span>
                </p>
            </div>

            <div className="inline md:hidden">
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    Tráfego no Site: Crescimento de 400%
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    Taxa de Conversão: Aumento de 3% para 8%
                    </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  Faturamento: Triplicou, ultrapassando os R$ 100 mil em vendas recorrentes.                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  Redução do Custo: O custo caiu pela metade</span>
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
