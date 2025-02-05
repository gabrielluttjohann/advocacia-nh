import whatsappImg from "@/assets/WhatsApp.png";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/data/links";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-7 right-4 z-50">
      <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <img
          src={whatsappImg.src}
          className=" w-20 h-20 drop-shadow-lg"
          alt="WhatsApp"
        />
      </Link>
    </div>
  );
}
