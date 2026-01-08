import Image from "next/image";
import Box from "@mui/material/Box";

export const Footer = () => {

  return (
    <Box component="footer" className="relative w-full p-6 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/icons/brandmark.svg"
          alt="logo"
          width={50}
          height={50}
        />
        <Image
          className="ml-2"
          src="/icons/logo-blue.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/icons/email.png"
          alt="logo"
          width={40}
          height={40}
        />
      </div>
    </Box>
  );
};
