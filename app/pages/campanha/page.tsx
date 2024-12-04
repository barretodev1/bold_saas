import Header2 from "@/app/_components/header2";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { CircleCheckBigIcon } from "lucide-react";
import Image from "next/image";

const TrafegoPage = () => {
  return (
    <>
      <Header2/>

      <div className="p-8" id="lucrar">
        <div className="flex justify-center items-center grid grid-cols-1 gap-7 md:grid-cols-3 flex justify-center items-center">
          <Card className="relative h-full md:h-full">
            <CardContent>
              <div className="flex mb-5 h-56 items-center justify-center">
                <Image
                  className=""
                  src="/google.png"
                  alt="google"
                  height={140}
                  width={140}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="truncate text-xl mb-3 font-bold">Google Ads.</h1>

                <div>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />

                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Configuração inicial de contas no Google
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Análise e otimização de palavras-chave.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Criação de anúncios básicos.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />1
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Reunião Mensal para revisar métricas.
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243255324709659">
                  <Button className="flex w-44 bottom-0 mb-4 absolute bg-violet-600">
                    Quero lucrar!
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="relative h-full md:h-full">
            <CardContent className="">
              <div className="top-0 mb-5 flex justify-center">
                <Image
                  src="/meta.png"
                  alt="Meta Ads"
                  className="h-56"
                  width={350}
                  height={200}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl mb-3 font-bold truncate">Meta Ads.</h1>

                <div className="">
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Segmentação Avançada de Públicos no Meta Ads.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Criação de campanhas personalizadas.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Análise de desempenho com relatórios.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      2 Reuniões Mensais para otimização.
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243255324709659">
                  <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                    Quero lucrar!
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="relative h-full md:h-full">
            <CardContent>
              <div className="flex mb-5 h-56 items-center justify-center">
                <Image
                  className=""
                  src="/google1.png"
                  alt="tiktok"
                  height={140}
                  width={140}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="truncate text-xl mb-3 font-bold">TikTok Ads.</h1>

                <div>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Estratégias Criativas para vídeos curtos.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Configuração e otimização de campanhas.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Análise de tendências e hashtags para maximizar alcance.
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Suporte Prioritário via WhatsApp.
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243255324709659">
                  <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
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

export default TrafegoPage;
