"use client";

import "../fsw-barber/fsw.css";
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
                  FSW Barber
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="absolute px-4 flex flex-col mt-10 left-0 w-full hidden md:block">
          <h1 className="w-full flex font-bold text-white text-xl ml-[3%] md:ml-[11%] mt-16">
            FSW Barber: Site institucional
          </h1>
          <h2 className="relative mb-20 left-0 text-sm' font-normal text-white mt-1 ml-[3%] md:ml-[11%]">
            O mercado de barbearias é altamente competitivo<br></br> nas redes
            sociais. Para a FSW Barber, a Bold Company<br></br> utilizou tráfego
            pago na Meta e a criação de um<br></br> site institucional otimizado
            para aumentar a<br></br> visibilidade e guiar os usuários em todas
            as<br></br> etapas da jornada de conversão.
          </h2>
          <h1 className="relative left-0 w-full flex font-extrabold text-white text-xl ml-[3%] md:ml-[11%]">
            FSW Barber
          </h1>
          <h2 className="relative left-0 mb-3 text-base font-normal text-white ml-[3%] md:ml-[11%]">
            Moda e Beleza
          </h2>
          <a
            data-aos="fade-right"
            href="https://fsw-barberkdev.vercel.app/"
            className="bg-violet-600 mt-3 p-2 w-40 items-center justify-center rounded-full relative flex left-0 text-base font-semibold hover:bg-violet-950 transition-all text-white mt-1 ml-[3%] md:ml-[11%]"
          >
            Conferir
          </a>
        </div>

        <div className="absolute px-4 flex flex-col mt-4 left-0 w-full block md:hidden">
          <h1 className="w-full flex font-bold text-white text-xl ml-[3%] md:ml-[11%]">
            FSW Barber: Site institucional
          </h1>
          <h2 className="relative mb-4 left-0 text-sm' font-normal text-white mt-1 ml-[3%] md:ml-[11%]">
            O mercado de barbearias é altamente competitivo nas redes sociais.
            Para a FSW Barber, a Bold Company utilizou tráfego pago na Meta e a
            criação de um site institucional otimizado para aumentar a
            visibilidade e guiar os usuários em todas as etapas da jornada de
            conversão.
          </h2>
          <h1 className="relative left-0 w-full flex font-extrabold text-white text-xl ml-[3%] md:ml-[11%]">
            FSW Barber
          </h1>
          <h2 className="relative left-0 mb-2 text-base font-normal text-white ml-[3%] md:ml-[11%]">
            Moda e Beleza
          </h2>
          <a
            data-aos="fade-right"
            href="https://fsw-barberkdev.vercel.app/"
            className="bg-violet-600 mt-1 p-2 w-40 items-center justify-center rounded-full relative flex left-0 text-base font-semibold hover:bg-violet-950 transition-all text-white mt-1 ml-[3%] md:ml-[11%]"
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
              A FSW Barber, uma barbearia renomada, estava enfrentando desafios
              para atrair novos<br></br> clientes e expandir sua presença
              digital. Sem um site profissional e com engajamento<br></br>{" "}
              limitado nas redes sociais, a barbearia buscou a ajuda da Bold
              Company para transformar<br></br> sua estratégia de marketing e
              aumentar sua clientela.
            </p>
            <p className="text-sm font-normal text-zinc-600 mt-1 block md:hidden">
              A FSW Barber, uma barbearia renomada, estava enfrentando desafios
              para atrair novos clientes e expandir sua presença digital. Sem um
              site profissional e com engajamento limitado nas redes sociais, a
              barbearia buscou a ajuda da Bold Company para transformar sua
              estratégia de marketing e aumentar sua clientela.
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
              Ao contratar a Bold Company, implementamos uma estratégia robusta,
              incluindo: Criação<br></br> de um site institucional otimizado
              para destacar serviços e agendamentos. Campanhas de<br></br>{" "}
              tráfego pago altamente segmentadas na Meta (Facebook e Instagram),
              com foco em alcançar<br></br> o público local e fidelizar
              clientes. Remarketing dinâmico para impactar usuários que<br></br>{" "}
              interagiram com as redes sociais, mas não realizaram ações
              concretas, como agendar um serviço.
            </p>
            <p className="text-sm font-normal text-zinc-600 mt-1 inline md:hidden">
              Ao contratar a Bold Company, implementamos uma estratégia robusta,
              incluindo: Criação de um site institucional otimizado para
              destacar serviços e agendamentos. Campanhas de tráfego pago
              altamente segmentadas na Meta (Facebook e Instagram), com foco em
              alcançar o público local e fidelizar clientes. Remarketing
              dinâmico para impactar usuários que interagiram com as redes
              sociais, mas não realizaram ações concretas, como agendar um
              serviço.
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
                    Tráfego no Site: Crescimento de 350%, atraindo usuários
                    interessados em agendar serviços.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Agendamentos Online: Aumento de 2% para 10% das reservas
                    realizadas diretamente pelo site.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Engajamento nas Redes Sociais: Dobrou, com mais interações e
                    mensagens diretas de clientes em potencial.
                  </span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>
                    Custo por Cliente Adquirido: Redução significativa de 40%
                    devido à otimização precisa das campanhas.
                  </span>
                </p>
              </div>

              {/* Versão para celular */}
              <div className="block md:hidden">
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span> Tráfego no Site: Crescimento de 350%.</span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>Agendamentos Online: Aumento de 10%.</span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>Engajamento nas Redes Sociais: Dobrou!</span>
                </p>
                <p className="flex text-base font-normal text-zinc-600 flex-row gap-2 items-center">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span>Custo por Cliente Adquirido: Redução de 40%.</span>
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
