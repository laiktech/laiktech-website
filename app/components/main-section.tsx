import { forwardRef } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { CustomButton } from "../shared/components/custom-button";
import { LAIKTECH_PHONE, WHATSAPP_BASIC_MESSAGE } from "../shared/components/const/whatsapp";

const titleStyle = "text-white text-[4rem] font-black leading-[1.2]";

export const MainSection = forwardRef<HTMLDivElement>(function Banner(_props, ref) {
  const handleContactButton = () => {
    const basepath = `https://api.whatsapp.com`;
    const url = `${ basepath }/send?phone=${ LAIKTECH_PHONE }&text=${ WHATSAPP_BASIC_MESSAGE }`;
    window.open(url);
  };

  return (
    <Box ref={ref} className="banner relative h-[40em] w-full" >
      <Image
        src="/backgrounds/banner-home.jpg"
        alt="Banner"
        fill
        className="object-cover"
      />
      <Box className="main-section__content relative h-full font-satoshi" 
        sx={{
          padding: {
            xs: "10em 2em",
            md: "13em"
          }
        }}
      >
        <h2 className={ titleStyle } >Soluciones</h2>
        <h2 className={ titleStyle } >tecnológicas</h2>
        <h2 className={ titleStyle } >de otro planeta</h2>
        <p className="text-white text-[1.2rem] pt-7 pb-11">Tu futuro digital puesto en órbita para ti</p>

        <CustomButton background="white" textColor="black" text="¡A despegar!" size="medium"  onClick={ handleContactButton }/>
      </Box>
    </Box>
  )
});
