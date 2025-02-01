import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import ThreeScene from "./ThreeScene";

export function BackgroundBeams() {
  return (
    <BackgroundBeamsWithCollision >
        <div className="  w-full h-full z-10"> 
              <ThreeScene />
            
          </div>
    
    </BackgroundBeamsWithCollision>
  );
}
