import Image from "next/image";
import Box from "@mui/material/Box";

export const Footer = () => {

  return (
    <Box component="footer" className="relative w-full p-6">
      <div>
        <Image
          src="/icons/logo-text.svg"
          alt="logo"
          width={200}
          height={200}
        />
      </div>
      <div>
        
      </div>
    </Box>
  );
};
