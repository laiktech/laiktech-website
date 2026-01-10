import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles";
import { CustomButton } from "../shared/components/custom-button";
import { NavigationSectionEnum } from "../shared/components/const/navigation";

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

const formStyle = "text-[1.3rem] mb-6";

export const ContactUs = () => {

  return (
    <Box id={ NavigationSectionEnum.ContactUs } className="contact-us font-satoshi relative h-[40em] w-full" >
      <Image
        src="/backgrounds/rocket-space.png"
        alt="Contact us"
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
              sx={{
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
              }}
              noValidate
              autoComplete="off"
            >
              <div className={ formStyle } >
                <p>Cuéntanos sobre tu proyecto</p>
                <TextField fullWidth id="project-form-detail" variant="outlined" size="small"
                  multiline rows={3} sx={ textFieldStyle }
                />
              </div>

              <div className={ formStyle } >
                <p>Nombre</p>
                <TextField fullWidth id="project-form-name" variant="outlined" size="small"
                  sx={ textFieldStyle }
                />
              </div>

              <div className={ formStyle } >
                <p>Correo/ teléfono</p>
                <TextField fullWidth id="project-form-mail-or-phone" variant="outlined" size="small"
                  sx={ textFieldStyle }
                />
              </div>

              <CustomButton background="white" textColor="black" text="Quiero saber más" size="medium" />
            </Box>
          </Grid>
        </Grid>        
      </Box>
    </Box>
  );
};
