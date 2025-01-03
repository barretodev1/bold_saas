import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import { CircleCheckBigIcon, CircleMinusIcon } from "lucide-react";
import Image from "next/image";
import HeaderCell from "@/app/_components/headerCell";
import ComponentFooter from "@/app/_components/footer";

const DesignPage = () => {
  return (
    <>
      <HeaderCell />

      <div className="flex mt-8 px-24 w-full hidden md:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-black font-bold"
                href="https://boldcompany.netlify.app"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-zinc-700 font-bold">
                Design
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="p-8 flex justify-center items-center" id="lucrar">
        <div className="flex justify-center items-center grid grid-cols-1 gap-7 md:grid-cols-3 flex justify-center items-center">
          <Card className="relative h-full">
            <CardContent className="">
              <div className="flex top-0 justify-center">
                <Image
                  src="/designbasico.png"
                  alt="Design Básico"
                  width={250}
                  height={150}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl mb-3 font-bold truncate">
                  Plano BÁSICO.
                </h1>

                <div className="">
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Análise do Design Atual (Redes sociais)
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Recomendações Básicas de Design
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      1 Reunião Mensal
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Criação de Layouts Personalizados
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Otimização de Elementos Visuais
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Análise e Ajuste de Materiais Visuais
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Mentoria Exclusiva
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Ajuste de Materiais Visuais - 1 ano
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Suporte Prioritário
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex mt-16">
                <a href="https://form.jotform.com/243258553976672">
                  <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                    Quero lucrar!
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="relative h-full">
            <CardContent className="">
              <div className="flex top-0 justify-center">
                <Image
                  src="/designpleno.png"
                  alt="Design Pleno"
                  width={250}
                  height={150}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl mb-3 font-bold truncate">
                  Plano PLENO.
                </h1>

                <div className="">
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Análise do Design Atual (Redes sociais)
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Recomendações Básicas de Design
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      1 Reunião Mensal
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Criação de Layouts Personalizados
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Otimização de Elementos Visuais
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Análise e Ajuste de Materiais Visuais
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Mentoria Exclusiva
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Ajuste de Materiais Visuais - 1 ano
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center   text-decoration: line-through text-zinc-500">
                    <CircleMinusIcon className="text-zinc-500" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Suporte Prioritário
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex mt-16">
                <a href="https://form.jotform.com/243258553976672">
                  <Button className="flex w-44 mt-6 bottom-0 mb-4 absolute bg-violet-600">
                    Quero lucrar!
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="relative h-full">
            <CardContent className="">
              <div className="flex top-0 justify-center">
                <Image
                  src="/designpremium.png"
                  alt="Design Premium"
                  width={250}
                  height={150}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl mb-3 font-bold truncate">
                  Plano PREMIUM.
                </h1>

                <div className="">
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Análise do Design Atual (Redes sociais)
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Recomendações Básicas de Design
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      1 Reunião Mensal
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Criação de Layouts Personalizados
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Otimização de Elementos Visuais
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Análise e Ajuste de Materiais Visuais
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Mentoria Exclusiva
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Ajuste de Materiais Visuais - 1 ano
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <CircleCheckBigIcon className="text-green-600" size={17} />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Suporte Prioritário
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex mt-16">
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

      <ComponentFooter/>
    </>
  );
};

export default DesignPage;
