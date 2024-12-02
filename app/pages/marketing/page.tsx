import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { CircleCheckBigIcon } from "lucide-react";
import Image from "next/image";

const MarketingPage = () => {
  return (
    <>
    <header
        className="flex bg-zinc-300 border-b border items-center w-full p-4 items-center justify-center"
        id="home"
      >
        <div>
          <a href="https://boldcompany.netlify.app/">
            <Image src="/logo.webp" alt="logo" width={150} height={150} />
          </a>
        </div>
    </header>

    <div className="p-8 flex justify-center items-center" id="lucrar">
      <div className="flex justify-center items-center ">
        <Card className="relative h-full">
          <CardContent className="">
            <div className="top-0 flex justify-center">
              <Image
                src="/consult.png"
                alt="Consultoria de Marketing"
                width={250}
                height={150}
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-xl mb-3 font-bold truncate">Consultoria de Marketing.</h1>

              <div className="">
                <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    1 reunião semanal.
                  </span>
                </p>
                <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    Campanhas promocionais.
                  </span>
                </p>
                <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    Análise de Métricas semanais.
                  </span>
                </p>
                <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    Suporte prioritário.
                  </span>
                </p>
              </div>
            </div>

            <div className="flex mt-16">
              <a href="https://www.cognitoforms.com/CaioBarreto/ConsultoriaDeMarketing">
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

export default MarketingPage;
