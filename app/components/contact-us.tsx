"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles";
import { CustomButton } from "../shared/components/custom-button";
import { NavigationSectionEnum } from "../shared/components/const/navigation";
import { redirectToWhatsapp } from "../shared/components/const/whatsapp";
import { animate } from "animejs";

const textFieldStyle: SxProps<Theme> = {
  "& label": {
    color: "gray",
  },
  "& label.Mui-focused": {
    color: "gray",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "11px",
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "#cecdcd",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#cecdcd",
    },
  }, 
  "& .MuiInputBase-input": {
    color: "var(--color-neutral-300)",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "gray",
    opacity: 1,
  },
};

const formStyle: SxProps<Theme> = {
  backdropFilter: "blur(2px)",
  backgroundColor: "rgb(255 255 255 / 2%)",
  padding: {
    xs: "3em 2em",
    sm: "4em"
  },
  margin: {
    xs: "0",
    sm: "2em"
  },
  marginTop: {
    xs: "1em"
  }
};

const fieldStyle = "text-[1.3rem] mb-6";

export const ContactUs = () => {
  const [ projectField , setProjectField ] = useState('');
  const [ nameField , setNameField ] = useState('');
  const [ companyField , setCompanyField ] = useState('');
  const [ emailField , setEmailField ] = useState('');

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleContactUs = () => {
    const whatsappMessage = 
      `Hola, Equipo de LaikTech 👋 Te escribe ${ nameField }. Estoy contactándote por la pagina web de Laiktech y me gustaría conversar con Uds. Para que no me guarden como “WhatsApp sin nombre” 😄, les dejo mis otros datos: 
      🏢 Empresa: ${ companyField }
      📧 Correo: ${ emailField }
      ✍️ Asunto: ${ projectField }`;
    redirectToWhatsapp(whatsappMessage);
  };

  useEffect(() => {
    const buttonCurrent = buttonRef.current
    if (!buttonCurrent) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate(buttonCurrent,{
          scale: [
            { to: 1.2, duration: 400, easing: "ease-out" },
            { to: 1,   duration: 400, easing: "ease-in" },
          ]
        })
      }
    });
    
    observer.observe(buttonCurrent);
    return () => observer.disconnect();
  }, []);

  return (
    <Box id={ NavigationSectionEnum.ContactUs } className="contact-us font-satoshi relative h-[45em] w-full" >
      <Image
        src="/backgrounds/rocket-space.png"
        alt="Contacto con Laiktech"
        fill
        className="object-cover"
      />
      <Box className="contact-us__content absolute text-white top-0 h-full w-full p-4">
        <Grid container spacing={2} className="h-full" >
          <Grid size={{ xs: 12, sm: 7 }} className="hidden md:block">
            <Box className="contact-us__title h-full flex items-center">
              <p className="leading-none text-[5rem] font-bold">Houston, <br /> encontremos la solución </p>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 5 }} >
            <Box
              className="contact-us__form border-[1] border-gray-500 rounded-4xl text-neutral-300" component="form"
              sx={ formStyle }
              noValidate
              autoComplete="off"
            >
              <div className={ fieldStyle } >
                <p>Cuéntanos sobre tu proyecto</p>
                <TextField fullWidth id="project-form-detail" variant="outlined" size="small" multiline rows={3} 
                sx={ textFieldStyle } value={ projectField } onChange={ (e) => setProjectField(e.target.value) }  />
              </div>

              <div className={ fieldStyle } >
                <p>Nombre</p>
                <TextField fullWidth id="project-form-name" variant="outlined" size="small"
                  sx={ textFieldStyle } value={ nameField } onChange={ (e) => setNameField(e.target.value) }  />
              </div>

              <div className={ fieldStyle } >
                <p>Empresa</p>
                <TextField fullWidth id="project-form-company" variant="outlined" size="small"
                  sx={ textFieldStyle } value={ companyField } onChange={ (e) => setCompanyField(e.target.value) }  />
              </div>

              <div className={ fieldStyle } >
                <p>Correo</p>
                <TextField fullWidth id="project-form-company" variant="outlined" size="small"
                  sx={ textFieldStyle } value={ emailField } onChange={ (e) => setEmailField(e.target.value) }  />
              </div>

              <CustomButton ref={ buttonRef } background="white" textColor="black" text="Quiero saber más" size="medium" onClick={ handleContactUs } />
            </Box>
          </Grid>
        </Grid>        
      </Box>
    </Box>
  );
};
