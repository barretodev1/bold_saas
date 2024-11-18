import Image from "next/image";

export default function HeaderComponent() {
    return (
    <header className="flex bg-zinc-300 border-b border items-center w-full p-4 justify-center md:justify-between">
        <div>
            <Image src='/logo.webp' alt="logo" width={150} height={150} />
        </div>

        <ul className="gap-4 hidden md:flex flex-row items-center mr-2 font-semibold">
            <li><a className="text-black font-semibold hover:text-violet-600 transition-all" href="#home">Home</a></li>
            <li><a className="text-black font-semibold hover:text-violet-600 transition-all" href="#sobre">Sobre</a></li>
            <li><a className="text-black font-semibold hover:text-violet-600 transition-all" href="#contato">Contato</a></li>
            <a className="flex justify-center cursor-pointer rounded-full bg-violet-600 p-2 w-36 font-normal text-white hover:bg-violet-500 transition-all" href="#lucrar">Lucrar!</a>
        </ul>
    </header>
    );
};
