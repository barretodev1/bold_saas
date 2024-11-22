import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { CircleCheckBigIcon, CircleMinusIcon } from "lucide-react";
import Image from "next/image";

const DesignPage = () => {
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

      <div className="p-8 mt-1" id="lucrar">
        <div className="flex justify-center items-center grid grid-cols-1 gap-7 md:grid-cols-3 flex justify-center items-center">
          <Card className="relative h-full md:h-full">
            <CardContent>
              <div className="mt-7 h-56 flex items-center justify-center">
                <Image
                  className="mt-[-15px]"
                  src="/designbasico.png"
                  alt="Plano Basico"
                  height={20}
                  width={200}
                />
              </div>

              <div className="flex flex-col mt-1">
                <h1 className="truncate text-xl mb-5 font-bold">
                  Plano BÁSICO.
                </h1>

                <div>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Análise do Design Atual (Redes sociais)
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Recomendações Básicas de Design
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    1 Reunião Mensal    
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                    Criação de Layouts Personalizados
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Otimização de Elementos Visuais
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Análise e Ajuste de Materiais Visuais
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Mentoria Exclusiva
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Ajuste de Materiais Visuais - 1 ano
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Suporte Prioritário
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243258553976672">
                  <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                    Quero lucrar!
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="relative h-full md:h-full">
            <CardContent className="">
            <div className="mt-7 h-56 flex items-center justify-center">
            <Image
                  src="/designpleno.png"
                  alt="Plano Pleno"
                  className="h-56"
                  width={200}
                  height={20}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl mb-5 font-bold truncate">
                  Plano PLENO.
                </h1>

                <div>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Análise do Design Atual (Redes sociais)
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Recomendações Básicas de Design
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    2 Reuniões Mensais    
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                    Criação de Layouts Personalizados
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Otimização de Elementos Visuais
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                    Análise e Ajuste de Materiais Visuais
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Mentoria Exclusiva
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Ajuste de Materiais Visuais - 1 ano
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    Suporte Prioritário
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243258553976672">
                  <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                    Quero lucrar!
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="relative h-full md:h-full">
            <CardContent className="">
            <div className="mt-7 h-56 flex items-center justify-center">
            <Image
                  src="/designpremium.png"
                  alt="Plano premium"
                  className="h-56"
                  width={200}
                  height={20}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl mb-5 font-bold truncate">
                  Plano PREMIUM.
                </h1>

                <div>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Análise do Design Atual (Redes sociais)
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Recomendações Básicas de Design
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    2 Reuniões Mensais    
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                    Criação de Layouts Personalizados
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    Otimização de Elementos Visuais
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                    Análise e Ajuste de Materiais Visuais
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                    Mentoria Exclusiva
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                    Ajuste de Materiais Visuais - 1 ano
                  </p>
                  <p className="flex flex-row gap-2   items-center ">
                  <CircleCheckBigIcon className="text-green-600" size={17} />
                    Suporte Prioritário
                  </p>
                </div>
              </div>

              <div className="flex mt-14">
                <a href="https://form.jotform.com/243258553976672">
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

export default DesignPage;
