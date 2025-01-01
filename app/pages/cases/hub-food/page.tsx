"use client";

import "../hub-food/hub.css";
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
                <BreadcrumbLink className="text-white" href="/pages/cases">
                  Cases
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-zinc-400">
                  Hub Food
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="absolute px-4 flex flex-col mt-10 left-0 w-full hidden md:block">
          <h1 className="w-full flex font-bold text-white text-xl ml-[3%] md:ml-[11%] mt-16">
            Hub Food: Tráfego Pago & E-commerce
          </h1>
          <h2 className="relative mb-20 left-0 text-sm font-normal text-white mt-1 ml-[3%] md:ml-[11%]">
            O mercado de delivery de comida é altamente competitivo<br></br> nas
            redes sociais. Para a Hub Food, a Bold Company<br></br> desenvolveu
            uma estratégia focada em tráfego pago e<br></br> criação de um site
            otimizado, aumentando a visibilidade e<br></br> guiando os clientes
            em todas as etapas da jornada de compra.
          </h2>

          <h1 className="relative left-0 w-full flex font-extrabold text-white text-xl ml-[3%] md:ml-[11%]">
            Hub Food
          </h1>
          <h2 className="relative left-0 mb-3 text-base font-normal text-white ml-[3%] md:ml-[11%]">
            Tráfego Pago & E-commerce
          </h2>
          <a
            data-aos="fade-right"
            href="https://famgz-food-hub-app.vercel.app/"
            className="bg-violet-600 mt-3 p-2 w-40 items-center justify-center rounded-full relative flex left-0 text-base font-semibold hover:bg-violet-950 transition-all text-white mt-1 ml-[3%] md:ml-[11%]"
          >
            Conferir
          </a>
        </div>

        <div className="absolute px-4 flex flex-col mt-4 left-0 w-full block md:hidden">
          <h1 className="w-full flex font-bold text-white text-xl ml-[3%] md:ml-[11%]">
            Hub Food: Tráfego Pago & E-commerce
          </h1>
          <h2 className="relative mb-4 left-0 text-sm' font-normal text-white mt-1 ml-[3%] md:ml-[11%]">
            O mercado de delivery de comida é altamente competitivo nas redes
            sociais. Para a Hub Food, a Bold Company desenvolveu uma estratégia
            focada em tráfego pago e criação de um site otimizado, aumentando a
            visibilidade e guiando os clientes em todas as etapas da jornada de
            compra.
          </h2>
          <h1 className="relative left-0 w-full flex font-extrabold text-white text-xl ml-[3%] md:ml-[11%]">
            Hub Food
          </h1>
          <h2 className="relative left-0 mb-2 text-base font-normal text-white ml-[3%] md:ml-[11%]">
            Tráfego Pago & E-commerce
          </h2>
          <a
            href="https://famgz-food-hub-app.vercel.app/"
            className="bg-white mt-3 p-2 w-40 items-center justify-center rounded-full relative flex left-0 text-base font-semibold hover:bg-zinc-300 transition-all text-black mt-4 ml-[3%] md:ml-[11%]"
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
              A Hub Food iniciou suas atividades em 2022 com grandes
              expectativas, mas enfrentava<br></br> desafios em 2023: vendas
              abaixo do esperado, pouco engajamento online e dificuldade
              <br></br> em alcançar novos clientes. Ao perceberem a necessidade
              de uma mudança, contrataram<br></br>a Bold Company para
              revitalizar suas estratégias de marketing digital.
            </p>
            <p className="text-sm font-normal text-zinc-600 mt-1 block md:hidden">
              A Hub Food iniciou suas atividades em 2022 com grandes
              expectativas, mas enfrentava desafios em 2023: vendas abaixo do
              esperado, pouco engajamento online e dificuldade em alcançar novos
              clientes. Ao perceberem a necessidade de uma mudança, contrataram
              a Bold Company para revitalizar suas estratégias de marketing
              digital.
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
              Com a parceria da Bold Company, elaboramos uma estratégia de
              tráfego pago personalizada<br></br> e altamente segmentada. Nossas
              ações incluíram: Campanhas no Google Ads: com palavras-chave
              <br></br> específicas para alimentos e delivery. Anúncios no
              Instagram e Facebook: voltados ao público<br></br> local e com
              conteúdos atraentes que destacavam as especialidades da Hub Food.
              Remarketing<br></br> Inteligente: atingindo potenciais clientes
              que visitaram o site, mas não finalizaram o pedido, por<br></br>{" "}
              meio de anúncios persuasivos e dinâmicos.
            </p>
            <p className="text-sm font-normal text-zinc-600 mt-1 inline md:hidden">
              Com a parceria da Bold Company, elaboramos uma estratégia de
              tráfego pago personalizada e altamente segmentada. Nossas ações
              incluíram: Campanhas no Google Ads: com palavras-chave específicas
              para alimentos e delivery. Anúncios no Instagram e Facebook:
              voltados ao público local e com conteúdos atraentes que destacavam
              as especialidades da Hub Food. Remarketing Inteligente: atingindo
              potenciais clientes que visitaram o site, mas não finalizaram o
              pedido, por meio de anúncios persuasivos e dinâmicos.
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
                    Tráfego no Site: Crescimento de 350%, atraindo visitantes
                    interessados nos produtos e nos serviços de delivery da Hub
                    Food.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Taxa de Conversão: Aumento de 2,5% para 7%, graças às
                    estratégias direcionadas e ao remarketing eficiente.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Faturamento Mensal: Mais que dobrou, alcançando R$ 80 mil em
                    vendas consistentes.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Redução do Custo por Conversão: O custo foi reduzido em 45%,
                    aumentando a rentabilidade de cada pedido.
                  </span>
                </p>
              </div>

              {/* Versão para celular */}
              <div className="block md:hidden">
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Tráfego no Site: Crescimento de 350%.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Taxa de Conversão: Aumento de 2,5% para 7%.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Faturamento Mensal: Mais que dobrou!
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Redução do Custo por Conversão: Reduzido em 45%.
                  </span>
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
