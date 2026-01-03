import Image from "next/image";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const OurValues = () => {
  return (
    <Box component="section" className="our-values container">
{/*       <Box className="our-values__head">
        <Grid container spacing={6}>
          <Grid size={4}>
            <h3 className="text-center pb-2">Valor 1</h3>
            <p className="text-justify">Lorem ipsum dolor sit amet, con-sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
          </Grid>
          <Grid size={4}>
            <h3 className="text-center pb-2">Valor 2</h3>
            <p className="text-justify">Lorem ipsum dolor sit amet, con-sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
          </Grid>
          <Grid size={4}>
            <h3 className="text-center pb-2">Valor 3</h3>
            <p className="text-justify">Lorem ipsum dolor sit amet, con-sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
          </Grid>
        </Grid>        
      </Box> */}

      <Box className="our-values__body mt-10" sx={{
        display: "grid",
        gridTemplateColumns: {
          sx: "1fr",
          md: "1fr 1fr"
        }
      }}>
        <figure className="flex justify-center items-center order-2 md:order-1">
          <Image
            alt="leasing"
            src="/images/man-tech-2.jpg"
            className="w-auto h-auto rounded-[2em]"
            height={200}
            width={200}
          />
        </figure>
        <div className="our-values__description text-right flex flex-col justify-center items-center order-1 md:order-2 mb-8">
          <h2 className="leading-none mb-6">
            Somos como astronautas (¡Tecnológicos!)
          </h2>
          <p>
            Somos un equipo de expertos en <strong>consultoría de TI y desarrollo de software.</strong>
            Con amplia experiencia en el sector, nos dedicamos a ofrecer soluciones tecnológicas innovadoras y 
            a medida para <strong>empresas de diversos sectores.</strong> Contamos con especialistas en áreas como análisis de datos,
            desarrollo web y móvil, calidad, y más.
          </p>
        </div>
      </Box>
    </Box>
  );
};
