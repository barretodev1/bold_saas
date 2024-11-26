"use client"

import Image from "next/image";
import { Button } from "../app/_components/ui/button"
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  const handleWebSite = () => {
    router.push('/')
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col gap-10 items-center justify-center">
        <Image className="flex h-full  justify-center items-center" src='erro404.svg' width={400} height={400} alt="erro 404"/>
        <Button onClick={handleWebSite} className="w-48 bg-violet-600">Voltar</Button>
      </div>
    </div>
  );
}
