'use client';
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const programmingLanguages = [
  "/icons/javascript.png",
  "/icons/python.png",
  "/icons/java.png",
  "/icons/c.png",
  "/icons/tensorflow.png",
  //"/icons/rust.png",
  "/icons/three.svg",
  "/icons/ts.svg",
];
const programmingLanguages2 = [
    "/icons/tensorflow.png",
    //"/icons/rust.png",
    "/icons/three.svg",
    "/icons/ts.svg",
    "/icons/javascript.png",
    "/icons/python.png",
    "/icons/java.png",
    "/icons/c.png",
   
  ];

const frameworks = [
  "/icons/tail.svg",
  "/icons/re.svg",
 // "/icons/vue.png",
  "/icons/nodejs.png",
  "/icons/tailwind.png",
  "/icons/nextjs.png",
  "/icons/vercel.svg",
];
const frameworks2 = [
    "/icons/vercel.svg",
    "/icons/nodejs.png",
    "/icons/tailwind.png",
    "/icons/nextjs.png",
    "/icons/tail.svg",
    "/icons/re.svg",
   // "/icons/vue.png",
    
  ];
  
const AutoScroll = () => {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollVariants = {
    animate: ({direction,duration}:{direction:number,duration:number}) => ({
      y: direction * -1000,
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
        
      },
    }),
    hover: {
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const renderColumn = (items: string[], columnIndex: number, direction: number,duration:number) => (
    <motion.div
      className="flex flex-col gap-4"
      variants={scrollVariants}
      animate={hoveredColumn === columnIndex ? "hover" : "animate"}
      custom={{direction,duration}}
      onHoverStart={() => setHoveredColumn(columnIndex)}
      onHoverEnd={() => setHoveredColumn(null)}
    >
      {[...items,...items, ...items, ...items,...items].map((src, index) => (
        <motion.div
          key={index+1}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setHoveredItem(`${columnIndex}-${index}`)}
          onHoverEnd={() => setHoveredItem(null)}
        > 
          <Image
            src={src}
            alt={`Tech Icon ${index}`}
            width={60}
            height={60}
            className={`border-2 rounded-lg p-2 transition-all duration-300 ${
              hoveredItem === `${columnIndex}-${index}`
                ? "brightness-125"
                : "grayscale"
            }`}
          />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="flex justify-center gap-10 overflow-hidden py-10 bg-transparent h-[300px]">
      {renderColumn(programmingLanguages, 0, 1,15)}
      {renderColumn(frameworks, 1, 1,40)}
      {renderColumn(programmingLanguages2, 2, 1,20)}
      {renderColumn(frameworks2, 1, 1,40)}
    </div>
  );
};

export default AutoScroll;