import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { CircleCheckBigIcon } from "lucide-react";
import Image from "next/image";

const CopyPage = () => {
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

    <div className="p-8 flex justify-center items-center mt-1" id="lucrar">
      <div className="flex justify-center items-center ">
        <Card className="relative h-full">
          <CardContent className="p-4">
            <div className="top-0 mb-5 flex justify-center">
              <Image
                src="/copy.png"
                alt="Técnicas de Copy"
                className="h-56"
                width={250}
                height={150}
              />
            </div>

            <div className="flex flex-col mt-9">
              <h1 className="text-xl mb-5 font-bold truncate">Plano Copywriting.</h1>

              <div className="">
                <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    Criação de Headlines chamativas e CTA.
                  </span>
                </p>
                <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    Estratégias de Storytelling
                  </span>
                </p>
                <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    Gatilhos mentais avançados no mercado.
                  </span>
                </p>
                <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    2 Reuniões Mensais para otimização.
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
              <a href="https://form.jotform.com/243263506726659">
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

export default CopyPage;
