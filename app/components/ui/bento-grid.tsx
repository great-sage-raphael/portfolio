import { cn } from "@/lib/utils";
import Image from "next/image";
import ThreeScene from "../ThreeScene";
import { BackgroundGradientAnimation } from "./background-gradient-animation";



export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imgClassName,
  img,
  spareImg,
  titleClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  spareImg?: React.ReactNode;
  img?: React.ReactNode;
  id?:number;
  titleClassName?:string;
  imgClassName?:string;
}) => {
    let threeD=true;
    if(id===1){
        threeD=false;
    }
    else{
        threeD=true;
    }
  return (
    <div
    className={cn(
      // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
      "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
      className
    )}
    style={{
      //   add these two
      //   you can generate the color from here https://cssgradient.io/
      background: "rgb(4,7,29)",
      backgroundColor:
        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    }}
  >
    <div className={`${id===6} && flex justify-center h-full`}>
        <div className=" w-full h-full absolute">
        { threeD ? 
        <img src={cn(img)} className={cn(imgClassName,'object-cover object-center')} alt="thumbnail"/>:<div className="flex justify-center w-full h-full absolute"><ThreeScene /> </div>}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
            {spareImg && (
                <img   
                src={cn(spareImg)} className='object-cover object-center w-full h-full' alt="thumbnail"/>
            )}
        {id===6 &&<BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold">
            </div>
        </BackgroundGradientAnimation> }
        <div className={cn
            (titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>
                <div>
                    {description}
                </div>
        </div>
        </div>
    </div>
      
      <div className="group-hover/bento:translate-x-2 transition duration-200">
       
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
       
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
