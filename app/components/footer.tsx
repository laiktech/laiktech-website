import Image from "next/image";
import Box from "@mui/material/Box";

export const Footer = () => {

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
      <div>
        <a href="mailto:contacto@laiktech.com">
          <Image
            src="/icons/email.png"
            alt="logo"
            width={40}
            height={40}
          />
        </a>
      </div>
    </Box>
  );
};
