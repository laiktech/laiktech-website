import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import { basepath, LAIKTECH_PHONE, WHATSAPP_BASIC_MESSAGE } from "../shared/components/const/whatsapp";

export const Footer = () => {
  const pathToWhatsapp = `${ basepath }/send?phone=${ LAIKTECH_PHONE }&text=${ WHATSAPP_BASIC_MESSAGE }`;

  return (
    <Box component="footer" className="relative w-full p-6" sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: {
        xs: "space-between",
        md: "space-around"
      }
    }}>
      <div className="flex items-center">
        <Image
          src="/icons/brandmark.svg"
          alt="logo"
          width={50}
          height={50}
        />
        <Image
          className="hidden md:block ml-2"
          src="/icons/logo-blue.svg"
          alt="logo"
          width={170}
          height={50}
        />
      </div>
      <div className="grid grid-flow-col auto-cols-max gap-4 items-center">
        <a href="mailto:contacto@laiktech.com">
          <Image
            src="/icons/email.png"
            alt="email a Laiktech"
            width={46}
            height={40}
          />
        </a>
        <Link href={ pathToWhatsapp } target="_blank">
          <Image
            src="/icons/chat.png"
            alt="chatea con Laiktech"
            width={40}
            height={55}
          />
        </Link>
      </div>
    </Box>
  );
};
