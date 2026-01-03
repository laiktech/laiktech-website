import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const OurProjects = () => {

  return (
    <Box component="section" className="our-projects container">
      <Grid container spacing={2}>
        <Grid size={4}>
          <h3 className="leading-none mb-10">Proyectos que <br /> impulsamos</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectem ipsum dolor sit amet,
            consectem ipsum dolor sit amet, consectem ipsum dolor sit amet, consectem ipsum dolor sit amet, 
            consecte
          </p>
        </Grid>
        <Grid size={8}>
          
        </Grid>
      </Grid>
    </Box>
  );
};
