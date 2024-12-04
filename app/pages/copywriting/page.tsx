import Header2 from "@/app/_components/header2";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { CircleCheckBigIcon } from "lucide-react";
import Image from "next/image";

const CopyPage = () => {
  return (
    <>
    <Header2/>

    <div className="p-8 flex justify-center items-center" id="lucrar">
      <div className="flex justify-center items-center ">
        <Card className="relative h-full">
          <CardContent className="">
            <div className="flex top-0 justify-center">
              <Image
                src="/copy.png"
                alt="Técnicas de Copy"
                width={250}
                height={150}
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-xl mb-3 font-bold truncate">Plano Copywriting.</h1>

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
