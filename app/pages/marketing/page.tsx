import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { CircleCheckBigIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import Image from "next/image";
import HeaderCell from "@/app/_components/headerCell";
import ComponentFooter from "@/app/_components/footer";

const MarketingPage = () => {
  return (
    <>
      <HeaderCell />

      <div className="flex mt-8 px-10  hidden md:block">
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
                Consultoria de Marketing
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

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
                <h1 className="text-xl mb-3 font-bold truncate">
                  Consultoria de Marketing.
                </h1>

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

      <ComponentFooter/>
    </>
  );
};

export default MarketingPage;
