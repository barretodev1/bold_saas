"use client";

import HeaderComponent from "@/app/_components/header";
import Image from "next/image";
import { Button } from "./_components/ui/button";
import ComponentContact from "./_components/contact";
import ComponentService from "./_components/card-service-item";
import SmoothScrollLinks from "../app/_components/scroll";
import ComponentFooter from "./_components/footer";
import { ArrowUpIcon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from "./_components/ui/card";
import CookieBanner from "./_components/cookies";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const navigateWithLoading = (route: string) => {
      router.push(route); 
    }; 

  useEffect(() => {
    AOS.init(); // Inicializa o AOS
  }, []);

  return (
    <div>
      <SmoothScrollLinks />
      {/* HEADER COMPONENT */}
      <HeaderComponent />

      {/* COMPONENT COOKIES */}
      <CookieBanner />

      {/* HOME BUTTON */}
      <div className="relative hidden md:inline">
        <a href="#home">
          <Button className="fixed right-0 bottom-0 mb-4 mr-5 z-30 bg-violet-600">
            <ArrowUpIcon />
          </Button>
        </a>
      </div>

      {/* COMPONENT MAIN */}
      <main className="flex items-center justify-evenly flex-col p-5 xl:flex-row">
        <Image
          src="/MainMarket.svg"
          alt="imagem principal"
          width={400}
          height={400}
        />
        <div className="hidden md:inline">
          <h1 className="text-xl mb-2">
            Alavanque seus <span className="text-xl font-bold">negócios!</span>
          </h1>
          <h2 className="text-lg">
            Está com dificuldade em vender, captar leads,
            <br />
            conquistar clientes e alavancar seu negócio, né?
            <br />
            Mude para uma estratégia assertiva com a{" "}
            <span className="text-lg font-extrabold text-violet-600">
              BOLD.
            </span>
          </h2>
          <a href="https://wa.me/11933255476">
            <Button className="mt-3 w-60 bg-black hover: bg-zinc-700 h-10">
              Lucrar agora!
            </Button>
          </a>
        </div>

        {/* DIV DO CELULAR (Mobile View) */}
        <div className="flex items-center justify-center flex-col mt-4 p-4 xl:hidden sm:hidden">
          <h1 className="text-xl mb-1">
            Alavanque seus <span className="text-xl font-bold">negócios!</span>
          </h1>
          <h2 className="text-lg">
            COM A{" "}
            <span className="text-lg font-extrabold text-violet-600">
              BOLD COMPANY.
            </span>
          </h2>
          <a href="https://wa.me/11933255476">
            <Button className="mt-3 w-60 h-10 bg-black">Lucrar agora!</Button>
          </a>
        </div>
      </main>

      {/* COMPONENT ABOUT CELL*/}
      <div className="flex flex-col items-center p-8 justify-center" id="sobre">
        <div data-aos="fade-up" className="h-[360px] mt-16">
          <Image src="/about.png" alt="sobre nós" height={330} width={330} />
        </div>

        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-9 flex-col md:flex-row"
        >
          {/* CARD MISSAO */}
          <Card className="relative h-full w-[360px]">
            <CardContent>
              <div className="flex flex-col mt-9">
                <h1 className=" flex items-center justify-center text-xl mb-2 font-bold">
                  MISSÃO
                </h1>

                <div className="flex flex-col gap-1">
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Transformar ideias em resultados.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Conectar marcas ao seu público ideal.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Potencializar negócios com criatividade.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Simplificar o marketing.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Gerar impacto através de inovação.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Impulsionar marcas com campanhas.
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CARD VISAO */}
          <Card className="relative h-full w-[360px]">
            <CardContent>
              <div className="flex flex-col mt-9">
                <h1 className=" flex items-center justify-center text-xl mb-2 font-bold">
                  VISÃO
                </h1>

                <div className="flex flex-col gap-1">
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Ser referência em marketing criativo.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Liderar tendências no mercado digital.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Inspirar confiança com resultados.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Revolucionar conexões entre marcas.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Crescer junto com nossos clientes.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Ser a escolha nº 1 em marketing.
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CARD VALORES */}
          <Card className="relative h-full w-[360px]">
            <CardContent>
              <div className="flex flex-col mt-9">
                <h1 className=" flex items-center justify-center text-xl mb-2 font-bold">
                  VALORES
                </h1>

                <div className="flex flex-col gap-1">
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Criatividade que inspira ações incríveis.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Foco total na entrega de resultados.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Ética e transparência em cada decisão.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Parcerias que constroem histórias.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Inovação como guia em tudo.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      - Personalização de atendimento.
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* COMPONENT LUCRAR */}
      <div className="p-8 mt-16" id="lucrar">
        <div className="flex items-center justify-center">
          <Image
            src="/lucrar.png"
            alt="venha lucrar"
            height={330}
            width={330}
          />
        </div>

        <div className="flex justify-center mt-12">
          <ComponentService />
        </div>
      </div>

      {/* COMPONENT CASES */}
      <div id="cases" className="flex flex-col p-8 items-center justify-center">
        <div data-aos="fade-up">
          <Image src="/cases.png" alt="cases" height={370} width={370} />
        </div>

        <div
          className="flex  flex-col gap-5 mt-10 md:flex-row"
        >
          {/* Primeiro Card */}
          <Card
            data-aos="fade-right"
            className="flex relative h-[60vh] w-[85vw] md:w-[30vw] bg-cover bg-center shadow-inner-bottom"
            style={{ backgroundImage: "url('/case-rarity.png')" }}
          >
            <CardContent>
              <div className="flex flex-col absolute mb-6 ml-2 bottom-0">
                <h1 className="text-white font-bold">Rarity.</h1>
                <p className="text-sm font-normal text-zinc-300 mb-3 mt-1">
                  Fizemos o trabalho de Landing Page <br></br>responsiva, ultilizando
                  técnicas de SEO<br></br>para ranqueamento orgânico.
                </p>
                <Button className="flex w-44 bg-white text-black">Saiba mais</Button>
              </div>
            </CardContent>
          </Card>

          {/* Segundo Card */}
          <Card
            data-aos="fade-left"
            className="flex flex-col relative h-[60vh] w-[85vw] md:w-[30vw] bg-cover bg-center shadow-inner-bottom"
            style={{ backgroundImage: "url('/case-uhn.png')" }}
          >
            <CardContent>
              <div className="flex flex-col absolute mb-6 ml-2 bottom-0">
                <h1 className="text-white font-bold">UHN Store.</h1>
                <p className="text-sm font-normal text-zinc-300 mb-3 mt-1">
                  Fizemos um trabalho de Tráfego Pago,<br></br>ultilizando
                  um serviço da Meta e<br></br> Google ADS, triplicando seus resultados.
                </p>
                <Button onClick={() => navigateWithLoading("/pages/saiba-mais/uhn-store")} className="flex w-44 bg-white text-black">Saiba mais</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* COMPONENT CONTACT US */}
      <div
        className="flex flex-col items-center justify-center p-8 pt-24"
        id="contato"
      >
        <div>
          <Image src="/contato.png" alt="contato" height={300} width={300} />
        </div>

        <div className="flex items-center justify-center mt-12">
          <ComponentContact />
        </div>
      </div>

      {/* COMPONENT FOOTER */}
      <div className="mt-20 w-full">
        <ComponentFooter />
      </div>
    </div>
  );
}
