"use client"

import HeaderCell from "@/app/_components/headerCell";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import ComponentFooter from "@/app/_components/footer";

const SaibaMais = () => {
  const router = useRouter();
  const navigateWithLoading = (route: string) => {
    router.push(route);
  };

  useEffect(() => {
    AOS.init(); // Inicializa o AOS
  }, []);
  return (
    <>
      <HeaderCell />
      <div className="flex px-4 ml-[3%] mt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-black"
                href="https://boldcompany.netlify.app"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-zinc-700">Cases</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center justify-center">
        <Image src='/casess.png' height={250} width={250} alt="Cases"/>
      </div>

      <div id="cases" className="flex flex-col items-center justify-center">
        <div className="flex  flex-col  gap-8">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Primeiro Card */}
            <Card
              data-aos="fade-up"
              className="flex relative h-[60vh] w-[85vw] md:w-[30vw] bg-cover bg-center shadow-inner-bottom"
              style={{ backgroundImage: "url('/case-rarity.png')" }}
            >
              <CardContent>
                <div className="flex flex-col absolute mb-6 ml-2 bottom-0">
                  <h1 className="text-white font-bold">Rarity.</h1>
                  <p className="text-sm font-normal text-zinc-300 mb-3 mt-1">
                    Fizemos o trabalho de Landing Page <br></br>responsiva,
                    ultilizando técnicas de SEO<br></br>para ranqueamento
                    orgânico.
                  </p>
                  <Button
                    onClick={() =>
                      navigateWithLoading("/pages/cases/rarity")
                    }
                    className="flex w-44 text-black bg-white hover:bg-slate-500"
                  >
                    Saiba mais
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Segundo Card */}
            <Card
              data-aos="fade-up"
              className="flex flex-col relative h-[60vh] w-[85vw] md:w-[30vw] bg-cover bg-center shadow-inner-bottom"
              style={{ backgroundImage: "url('/case-uhn.png')" }}
            >
              <CardContent>
                <div className="flex flex-col absolute mb-6 ml-2 bottom-0">
                  <h1 className="text-white font-bold">UHN Store.</h1>
                  <p className="text-sm font-normal text-zinc-300 mb-3 mt-1">
                    Fizemos um trabalho de Tráfego Pago,<br></br>ultilizando um
                    serviço da Meta e<br></br> Google ADS, triplicando seus
                    resultados.
                  </p>
                  <Button
                    onClick={() =>
                      navigateWithLoading("/pages/cases/uhn-store")
                    }
                    className="flex w-44 bg-white text-black"
                  >
                    Saiba mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-10 mb-16">
            {/* Primeiro Card */}
            <Card
              data-aos="fade-up"
              className="flex relative h-[60vh] w-[85vw] md:w-[30vw] bg-cover bg-center shadow-inner-bottom"
              style={{ backgroundImage: "url('/barbershop.png')" }}
            >
              <CardContent>
                <div className="flex flex-col absolute mb-6 ml-2 bottom-0">
                  <h1 className="text-white font-bold">FSW Barber.</h1>
                  <p className="text-sm font-normal text-zinc-300 mb-3 mt-1">
                    Fizemos o trabalho de site institucional<br></br>responsivo,
                    ultilizando tráfego pago da<br></br>Meta e Google.
                  </p>
                  <Button
                    onClick={() =>
                      navigateWithLoading("/pages/cases/fsw-barber")
                    }
                    className="flex w-44 text-black bg-white hover:bg-slate-500"
                  >
                    Saiba mais
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Segundo Card */}
            <Card
              data-aos="fade-up"
              className="flex flex-col relative h-[60vh] w-[85vw] md:w-[30vw] bg-cover bg-center shadow-inner-bottom"
              style={{ backgroundImage: "url('/hubfood.png')" }}
            >
              <CardContent>
                <div className="flex flex-col absolute mb-6 ml-2 bottom-0">
                  <h1 className="text-white font-bold">HubFood.</h1>
                  <p className="text-sm font-normal text-zinc-300 mb-3 mt-1">
                    Fizemos um trabalho de E-commerce,<br></br>ultilizando métodos de
                    otimização<br></br>como: SEO, SSR e LazyLoading...
                  </p>
                  <Button
                    onClick={() =>
                      navigateWithLoading("/pages/cases/hub-food")
                    }
                    className="flex w-44 bg-white text-black"
                  >
                    Saiba mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <ComponentFooter/>
    </>
  );
};

export default SaibaMais;
