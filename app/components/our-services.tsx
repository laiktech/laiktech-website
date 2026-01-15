import Image from "next/image";

import Box from "@mui/material/Box";
import { NavigationSectionEnum } from "../shared/components/const/navigation";

type serviceCardType = {
  background: "bg-secondary" | "bg-primary";
  colorText: "text-secondary" | "text-primary";
  description: string;
  icon: string;
  title: string;
};

type serviceCardProps = {
  item: serviceCardType;
};

const serviceCardList: serviceCardType[] = [
  {
    background: "bg-secondary",
    colorText: "text-primary",
    description: "¡Encendemos tu marca! Atrae más clientes y rediseña tu estrategia de marketing para que no dependas de la suerte.",
    icon: "digital-marketing",
    title: "Marketing digital",
  },
  {
    background: "bg-primary",
    colorText: "text-secondary",
    description: "Construimos tecnología como un traje a medida.",
    icon: "software-developer",
    title: "Software Factory",
  },
  {
    background: "bg-secondary",
    colorText: "text-primary",
    description: "Llevamos tus sistemas, procesos y operaciones a otro nivel.",
    icon: "launch",
    title: "Transformación Digital",
  },
  {
    background: "bg-primary",
    colorText: "text-secondary",
    description: "Construimos y fortalecemos la columna vertebral de tus sistemas TI.",
    icon: "infraestructure",
    title: "Infraestructura TI y Soporte",
  },
];

const ServiceCard = ({ item } : serviceCardProps) => (
  <div className={`slider__box p-4 rounded-tr-[5em] w-[13em] h-[19em] ${ item.background } mr-10 ${ item.colorText }`}>
    <figure className="py-4">
      <Image
        alt="software-developer"
        className="w-auto h-auto"
        src={`/icons/${ item.icon }.png`}
        height={55}
        width={55}
      />
    </figure>
    <p className="text-xl font-medium">{ item.title }</p>
    <p>{ item.description }</p>
  </div>
);

const ServiceSlider = () => {
  return (
    <div className="slider">
      <div className="slider__row">
        {
          serviceCardList.map((item, index: number) => <ServiceCard key={`${index}-${item.title}`} item={ item } />)
        }
        {
          serviceCardList.map((item, index: number) => <ServiceCard key={`clone-${index}-${item.title}`} item={ item } />)
        }
      </div>
    </div>
  );
};

export const OurServices = () => {
  return (
    <Box id={ NavigationSectionEnum.OurServices } component="section" className="our-services container" >
      <p>Servicios</p>
      <h3 className="leading-none mb-10 mt-4">Soluciones tecnológicas <br /> para tu empresa</h3>
      <div className="overflow-hidden relative">
        <ServiceSlider />
      </div>
    </Box>
  );
};
