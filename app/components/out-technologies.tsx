import Image from "next/image";

import Box from "@mui/material/Box";

const technologiesIcons = ["javascript", "typescript", "python"];

export const OurTechnologies = () => {

  return (
    <Box component="section" className="our-technologies container">
      <h3 className="mb-10">Tecnologías que implementamos</h3>
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-left1">
            { technologiesIcons.map((item, index: number) => 
            <figure key={`${index}-${item}`} className="max-w-[3em]">
              <Image
                alt="tecnologías en Laiktech"
                src={`/icons/${ item }.png`}
                width={100}
                height={100}
                className="w-auto h-auto"
              />
            </figure>
            )}
          </div>
        </div>
    </Box>
  );
};

