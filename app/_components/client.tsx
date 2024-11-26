import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { StarIcon, UsersRoundIcon } from "lucide-react";

const ClientPage = () => {
  return (
    <div
      className="flex p-8 flex-col gap-7 justify-center items-center"
      id="clientes"
    >
      <div className="flex">
        <Image src="/clientes.png" width={300} height={300} alt="clientes" />
      </div>

      <div className="flex flex-col p-7 gap-4">
        <h1 className="text-semibold flex items-center justify-center inline md:hidden">Arraste pro lado...</h1>
        <Carousel className="flex p-6 items-center justify-center border border-solid border-zinc-400 p-10">
          <CarouselContent className="flex flex-nowrap gap-2 w-80 md:w-96">

            <CarouselItem className="flex flex-col gap-5 items-center justify-center">
              <Avatar className="flex items-center justify-center">
                <AvatarImage className="flex items-center justify-center" src="https://github.com/shadcn.png" />
                <AvatarFallback className="flex items-center justify-center">
                  <UsersRoundIcon className="flex items-center justify-center" />
                </AvatarFallback>
              </Avatar>

              <div className="flex items-center justify-center flex-row ">
                <StarIcon className="flex items-center justify-center text-yellow-500" />
                <StarIcon className="flex items-center justify-center text-yellow-500" />
                <StarIcon className="flex items-center justify-center text-yellow-500" />
                <StarIcon className="flex items-center justify-center text-yellow-500" />
                <StarIcon className="flex items-center justify-center text-zinc-800" />{" "}
              </div>

              <div className="flex text-center flex-col items-center justify-center">
                <h1>Qualidade Inigualável!</h1>
                <p>
                  O serviço foi impecável do início ao fim, superando todas as
                  expectativas.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col gap-5 items-center justify-center">
              <Avatar>
                <AvatarImage src="p1.jpg" />
                <AvatarFallback>
                  <UsersRoundIcon />
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-row ">
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
              </div>

              <div className="flex text-center flex-col items-center justify-center">
                <h1>Recomendo de olhos fechados!</h1>
                <p>
                  Serviço excelente, equipe dedicada e resultado maravilhoso.
                  Parabéns!
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col gap-5 items-center justify-center">
              <Avatar>
                <AvatarImage src="p3.jpg" />
                <AvatarFallback>
                  <UsersRoundIcon />
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-row ">
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
              </div>

              <div className="flex text-center flex-col items-center justify-center">
                <h1>Atendimento Fantástico!</h1>
                <p>
                  Equipe extremamente atenciosa e eficiente. Recomendo a todos!
                </p>
              </div>

            </CarouselItem>

            <CarouselItem className="flex flex-col gap-5 items-center justify-center">
              <Avatar>
                <AvatarImage src="p4.jpg" />
                <AvatarFallback>
                  <UsersRoundIcon />
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-row ">
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-zinc-800" />{" "}
              </div>

              <div className="flex text-center flex-col items-center justify-center">
                <h1>Superou minhas expectativas!</h1>
                <p>
                  Desde o atendimento até a entrega, tudo foi perfeito. Produto
                  de altíssima qualidade!
                </p>
              </div>
            </CarouselItem>

          </CarouselContent>
          <CarouselPrevious className="bg-black flex items-center justify-center  hidden md:inline" />
          <CarouselNext className="bg-black flex items-center justify-center  hidden md:inline" />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientPage;
