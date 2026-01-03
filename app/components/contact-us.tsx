import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles";
import { CustomButton } from "../shared/components/custom-button";

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
  "& .MuiOutlinedInput-input::placeholder": {
    color: "gray",
    opacity: 1,
  },
};

const formLabelStyle = "text-[1.3rem] mt-6";

export const ContactUs = () => {

  return (
    <Box className="contact-us font-satoshi relative h-[40em] w-full" >
      <Image
        src="/backgrounds/rocket-space.png"
        alt="Contact us"
        fill
        className="object-cover"
      />
      <Box className="contact-us__content absolute text-white top-0 h-full w-full p-4">
        <Grid container spacing={2} className="h-full" >
          <Grid size={6}>
            <Box className="contact-us__title h-full flex items-center">
              <p className="leading-none text-[6rem] font-bold">Houston, <br /> hallamos la solución </p>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box
              className="contact-us__form border-[1] border-gray-500 rounded-4xl text-neutral-300" component="form"
              sx={{
                backdropFilter: "blur(2px)",
                backgroundColor: "rgb(255 255 255 / 2%)",
                padding: "4em",
                margin: "2em",
              }}
              noValidate
              autoComplete="off"
            >
              <p className={ formLabelStyle } >Cuéntanos sobre tu proyecto</p>
              <TextField fullWidth id="project-form-detail" variant="outlined" size="small"
                multiline rows={3} sx={ textFieldStyle }
              />

              <p className={ formLabelStyle } >Nombre</p>
              <TextField fullWidth id="project-form-name" variant="outlined" size="small"
                sx={ textFieldStyle }
              />

              <p className={ formLabelStyle } >Correo/ teléfono</p>
              <TextField fullWidth id="project-form-mail-or-phone" variant="outlined" size="small"
                sx={ textFieldStyle }
              />
              <br></br><br></br>
              <CustomButton background="white" textColor="black" text="Quiero saber más" size="medium" />
            </Box>
          </Grid>
        </Grid>        
      </Box>
    </Box>
  );
};
