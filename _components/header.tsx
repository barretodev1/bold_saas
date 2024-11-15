import Image from "next/image";

export default function HeaderComponent() {
    return (
    <header className="flex bg-zinc-300 border-b border items-center w-full p-4 justify-center md:justify-between border-b border">
        <div>
            <Image src='/logo.webp' alt="logo" width={150} height={150} />
        </div>

        <ul className="flex flex-row gap-3 hidden md:flex flex-row items-center mr-2 font-semibold">
            <li><a className="text-black font-semibold hover:text-violet-600 transition-all" href="">Home</a></li>
            <li><a className="text-black font-semibold hover:text-violet-600 transition-all" href="">Sobre</a></li>
            <li><a className="text-black font-semibold hover:text-violet-600 transition-all" href="">Contato</a></li>
            <li className="flex justify-center cursor-pointer rounded-full bg-violet-600 p-2 w-36 hover:bg-violet-500 transition-all"><a className="font-normal text-white" href="">Lucrar!</a></li>
        </ul>
    </header>
    );
};
