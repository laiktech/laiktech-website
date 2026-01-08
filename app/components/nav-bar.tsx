import { useState } from "react";

import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";
import { CustomButton } from "../shared/components/custom-button";

type BannerProps = {
  isMainBannerVisible: boolean;
};

const drawerWidth = 240;
const navItems = ["Home", "Nosotros", "Servicios"];
const navItemsStyles: SxProps<Theme> = {
  display: { xs: "none", sm: "flex" },
  width: "100%",
  justifyContent: "space-evenly",
  alignItems: "center"
};

export const NavBar = ({ isMainBannerVisible }: BannerProps) => {
  const [ mobileOpen, setMobileOpen ] = useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState: boolean) => !prevState);
  };

  const drawerMobile = (
    <Box onClick={ handleDrawerToggle } sx={{ textAlign: "center" }} >
      <Typography variant="h6" sx={{ my: 2 }} >
        LaikTech
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={ item } disablePadding >
            <ListItemButton sx={{ textAlign: "center" }} >
              <ListItemText primary={ item } />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className="navigation" >
      <CssBaseline /> 
      <AppBar component="nav" sx={{
        background: isMainBannerVisible ? "#00000069": "black",
        padding: "0.4em 0em",
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "#fff", mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="figure" sx={{
            boxShadow: "1px 0px 2px 1px #000",
            background: "black",
            width: {
              xs: "21%",
              md: "13%",
            }
          }}>
            <Image
              src="/icons/logo-white.png"
              alt="logo"
              width={500}
              height={500}
            />
            <p className="text-center text-[0.8rem] text-neutral-300 hidden lg:block">Consultoría y desarrollo TI</p>
          </Box>
          <Box className="nav-items" sx={ navItemsStyles }
          >
            { navItems.map((item) => (
              <CustomButton key={ item } textColor="white" background="transparent" fontFamily="mont-black" text={ item } />
            ))}
            <CustomButton textColor="black" background="white" text="Contáctanos" fontFamily="mont-black" />
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer Mobile */}
      <nav>
        <Drawer
          variant="temporary"
          open={ mobileOpen }
          onClose={ handleDrawerToggle }
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          { drawerMobile }
        </Drawer>
      </nav>
    </Box>
  );
};
