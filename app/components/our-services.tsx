import Image from "next/image";

import Box from "@mui/material/Box";

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
    description: "Optimiza tus procesos, mejora la eficiencia y alcanza tus objetivos comerciales.",
    icon: "software-developer",
    title: "Desarrollo de software",
  },
  {
    background: "bg-primary",
    colorText: "text-secondary",
    description: "Destaca tu empresa en línea y ofrece una experiencia excepcional a tus visitantes.",
    icon: "searching-website",
    title: "Desarrollo de páginas web",
  },
  {
    background: "bg-secondary",
    colorText: "text-primary",
    description: "Solución confiable y segura para alojar tu sitio web o aplicación en línea sin problemas técnicos.",
    icon: "searching-website",
    title: "Hosting",
  },
];

const ServiceCard = ({ item } : serviceCardProps) => (
  <div className={`p-4 rounded-tr-[5em] w-[13em] h-[19em] ${ item.background } mr-6 ${ item.colorText }`}>
    <figure className="py-4">
      <Image
        alt="software-developer"
        className="w-auto h-auto"
        src={`/icons/${ item.icon }.png`}
        height={0}
        width={0}
      />
    </figure>
    <p className="text-xl font-medium">{ item.title }</p>
    <p>{ item.description }</p>
  </div>
);

export const OurServices = () => {
  return (
    <Box component="section" className="our-services container">
      <p>Servicios</p>
      <h3 className="leading-none mb-10 mt-4">Soluciones tecnológicas <br /> para tu empresa</h3>
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll-left">
          {
            serviceCardList.map((item, index: number) => <ServiceCard key={`${index}-${item.title}`} item={ item } />)
          }
        </div>
      </div>
    </Box>
  );
};
