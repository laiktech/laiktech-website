import Box from "@mui/material/Box";
import { NavBar } from "./nav-bar";
import { Banner } from "./banner";

export const Header = () => {

  return (
    <Box className="header">
      <NavBar />
      <Banner/>
    </Box>
  );
};
