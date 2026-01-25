import { forwardRef, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { CustomButton } from "../shared/components/custom-button";
import { LAIKTECH_PHONE, WHATSAPP_BASIC_MESSAGE } from "../shared/components/const/whatsapp";
import { animate } from "animejs";
import "./banner.css";

const titleStyle = "text-white text-[3rem] md:text-[4rem] font-black leading-[1.2]";

export const Banner = forwardRef<HTMLDivElement>(function Banner(_props, ref) {
  const earthRef = useRef<HTMLDivElement | null>(null);
  const descriptionTextRef = useRef<HTMLDivElement | null>(null);
  
  const handleContactButton = () => {
    const basepath = `https://api.whatsapp.com`;
    const url = `${ basepath }/send?phone=${ LAIKTECH_PHONE }&text=${ WHATSAPP_BASIC_MESSAGE }`;
    window.open(url);
  }; 
  
  useEffect(() => {
    if (!earthRef.current) return;

    if (!descriptionTextRef.current) return;
    animate(earthRef.current, {
      translateX: ['-100vw', '60vw'],
      duration: 4500,
      easing: 'easeOutExpo',
      delay: 300
    });

    animate(descriptionTextRef.current, {
      translateX: ['100vw', '0vw'],
      duration: 1500,
      easing: 'easeOutExpo',
      delay: 300
    });
  }, []);

  return (
    <Box ref={ ref } className="banner h-screen">
      <Box className="banner-container overflow-hidden absolute w-full h-[70vh] md:h-screen">
        <img className="h-full w-full" src="/backgrounds/universe-2.png" alt="Tierra" />
        <div ref={ earthRef } className="earth-banner h-full">
          <img className="h-full" src="/backgrounds/planet-earth-isolated-1.png" alt="Tierra" />
        </div>
      </Box>
      <Box ref={ descriptionTextRef } className="main-section__content relative h-full font-satoshi" 
        sx={{
          padding: {
            xs: "10em 2em",
            md: "13em"
          }
        }}
      >
        <p className={ titleStyle }>Soluciones</p>
        <p className={ titleStyle }>tecnológicas</p>
        <p className={ titleStyle }>de otro planeta</p>
        <p className="text-white text-[1.2rem] pt-7 pb-11">Tu futuro digital puesto en órbita para ti</p>

        <CustomButton background="white" textColor="black" text="¡A despegar!" size="medium"  onClick={ handleContactButton }/>
      </Box>
    </Box>
  )
});
