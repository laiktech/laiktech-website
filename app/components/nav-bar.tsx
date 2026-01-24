import { useState } from "react";

import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { SxProps, Theme } from "@mui/material/styles";
import Link from "next/link";
import { NavigationSectionEnum } from "../shared/components/const/navigation";

type BannerProps = {
  isMainBannerVisible: boolean;
};

const drawerWidth = 240;
const navItems = [
  {
    href: NavigationSectionEnum.Home,
    value: "Home"
  },
  {
    href: NavigationSectionEnum.AboutUs,
    value: "Nosotros", 
  },
  {
    href: NavigationSectionEnum.OurServices,
    value: "Servicios"
  }
];

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
      <Box className="nav-logo--mobile flex justify-center items-center m-4">
        <Image
          src="/icons/logo-blue.svg"
          alt="logo"
          width={150}
          height={150}
        />
      </Box>
      <Divider />
      <Box className="nav-items flex flex-col mt-4">
        { navItems.map((item) => (
          <div key={ item.href } className="nav-item font-mont-black m-4">
            <Link href={`#${ item.href }`}>{ item.value }</Link>
          </div>
        ))}
        <div key={ NavigationSectionEnum.ContactUs } className="nav-item font-mont-black m-4">
          <Link  href={`#${ NavigationSectionEnum.ContactUs }`} 
          className="font-mont-black m-4">
            Contáctanos
          </Link>
        </div>
      </Box>
    </Box>
  );

  return (
    <Box className="navigation" >
      <CssBaseline /> 
      <AppBar component="nav" sx={{
        background: isMainBannerVisible ? "#00000069": "black"
      }}>
        <Toolbar sx={{ paddingLeft: "0px !important" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "#fff", ml: 2, mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="figure" sx={{
            background: "black",
            maxWidth: {
              xs: "33%",
              md: "23%",
              lg: "15%",
            },
            padding: {
              xs: "1em",
              md: "0.5em 2em"
            }
          }}>
            <Box component="figure" className="relative w-[6em] h-[2em] overflow-hidden" sx={{
              height: {
                xs: "2em",
                md: "3em"
              },
              width: {
                xs: "6em",
                md: "10em"
              }
            }}>
              <Image
                src="/icons/logo-white.png"
                alt="logo"
                fill
              className="w-full h-full object-contain"
              />
            </Box>
            <p className="text-center text-[0.8rem] text-neutral-300 hidden lg:block">Consultoría y desarrollo TI</p>
          </Box>
          <Box className="nav-items" sx={ navItemsStyles }>
            { navItems.map((item) => (
              <Link key={ item.href } href={`#${ item.href }`} className="font-mont-black">{ item.value }</Link>
            ))}
            <Link key={ NavigationSectionEnum.ContactUs } href={`#${ NavigationSectionEnum.ContactUs }`}
              className="font-mont-black bg-white text-black px-4 py-2 rounded-md"
            >
              Contáctanos
            </Link>
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
