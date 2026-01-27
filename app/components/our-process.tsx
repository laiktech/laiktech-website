"use client";
import Image from "next/image";
import Box from "@mui/material/Box";
import { animate, stagger } from "animejs";
import { useEffect, useRef } from "react";

const counterStyle = "num inline-block";

export const OurProcess = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const countdownRef = useRef<HTMLParagraphElement | null>(null);
  const step1FigureRef = useRef<HTMLElement | null>(null);
  const step2FigureRef = useRef<HTMLElement | null>(null);
  const step3FigureRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!componentRef.current || !countdownRef.current) return;
    const numbers = countdownRef.current.querySelectorAll<HTMLSpanElement>(".num");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate(numbers, {
          opacity: [0, 1],
          scale: [2, 1],
          easing: "ease-out",
          duration: 700,
          delay: stagger(1000),
        });

      if (step1FigureRef.current)
        animate(step1FigureRef.current, {
          translateX: ['0vw', '-100vw'],
          easing: "ease-out",
          duration: 700,
          delay: 0,
        });

       if (step2FigureRef.current)
        animate(step2FigureRef.current, {
          translateX: ['0vw', '100vw'],
          easing: "ease-out",
          duration: 700,
          delay: 800,
        });

       if (step3FigureRef.current)
        animate(step3FigureRef.current, {
          translateX: ['0vw', '-100vw'],
          easing: "ease-out",
          duration: 700,
          delay: 1600,
        });
      }
    }, { threshold: 0 });
    observer.observe(componentRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <Box ref={ componentRef } component="section" className="our-process container">
      <p ref={ countdownRef } className="countdown">
        En <span className={ counterStyle }>5</span>, <span className={counterStyle}>4</span>, <span className={counterStyle}>3</span>...
      </p>
      <h3 className="leading-none mb-10 mt-4">
        Los pasos para tu <br /> lanzamiento espacial
      </h3>
      <div className="our-process__steps mb-4">
        <figure ref={ step1FigureRef } className="py-4 transform translate-x-[100vw]">
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
        <figure ref={ step2FigureRef } className="py-4 transform translate-x-[-100vw]">
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
        <figure ref={ step3FigureRef } className="py-4 transform translate-x-[100vw]">
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
