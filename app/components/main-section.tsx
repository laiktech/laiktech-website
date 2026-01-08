import { forwardRef } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { CustomButton } from "../shared/components/custom-button";

const titleStyle = "text-white text-[4rem] font-black leading-[1.2]";

export const MainSection = forwardRef<HTMLDivElement>(function Banner(_props, ref) {
  const handleContactButton = () => {
  const laiktechPhone = "51993230963";
  const basepath = `https://api.whatsapp.com`;
  const message = `Hola%2C%20Equipo%20de%20LaikTech%20%F0%9F%91%8B.%20Estoy%20contact%C3%A1ndote%20por%20la%20pagina%20web%20de%20Laiktech%20y%20me%20gustar%C3%ADa%20conversar%20con%20ustedes.`;

  const url = `${basepath}/send?phone=${laiktechPhone}&text=${message}`;
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
