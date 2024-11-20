import {
  InstagramIcon,
  MailIcon,
  MessageCircleIcon,
  ZapIcon,
} from "lucide-react";
import { Card } from "./ui/card";

const ComponentContact = () => {
  return (
      <main className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <a href="https://www.instagram.com/oboldcompany">
          <Card className="flex border hover:bg-zinc-200 transition-all border-solid border-zinc-600 items-center justify-center h-24 w-44">
            <div className="flex justify-center items-center text-center">
              <InstagramIcon width={50} height={50} />
            </div>
          </Card>
        </a>

        <a href="https://mailto:caiobarreo1acim@gmail.com">
          <Card className="flex border hover:bg-zinc-200 transition-all border-solid border-zinc-600 items-center justify-center h-24 w-44">
            <div className="flex justify-center items-center text-center">
              <MailIcon width={50} height={50} />
            </div>
          </Card>
        </a>

        <a href="https://wa.me/11933255476">
          <Card className="flex border hover:bg-zinc-200 transition-all border-solid border-zinc-600 items-center justify-center h-24 w-44">
            <div className="flex justify-center items-center text-center">
              <MessageCircleIcon width={50} height={50} />
            </div>
          </Card>
        </a>
      </main>
  );
};

export default ComponentContact;
