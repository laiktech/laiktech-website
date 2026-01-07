import Image from "next/image";
import Box from "@mui/material/Box";

export const OurProcess = () => {

  return (
    <Box component="section" className="our-process container">
      <p>En 5, 4, 3...</p>
      <h3 className="leading-none mb-10 mt-4">
        Los pasos para tu <br /> lanzamiento espacial
      </h3>
      <div className="our-process__steps mb-4">
        <figure className="py-4">
          <Image
            alt="software-developer"
            className="w-auto h-auto"
            src="/images/process-initial.png"
            height={1000}
            width={1000}
          />
        </figure>
      </div>
      <div className="our-process__steps mb-4">
        <figure className="py-4">
          <Image
            alt="software-developer"
            className="w-auto h-auto"
            src="/images/process-agile.png"
            height={1000}
            width={1000}
          />
        </figure>
      </div>
      <div className="our-process__steps mb-4">
        <figure className="py-4">
          <Image
            alt="software-developer"
            className="w-auto h-auto"
            src="/images/process-hybrid.png"
            height={1000}
            width={1000}
          />
        </figure>
      </div>

    </Box>
  )
};
