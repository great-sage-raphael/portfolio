import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import ThreeScene from "../ThreeScene";

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
  id?: number;
  titleClassName?: string;
  imgClassName?: string;
}) => {
  const isThreeD = id === 1 ? false : true;

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col",
        className
      )}
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
      }}
    >
      <div className={cn(
        "h-full w-full relative flex flex-col",
        id === 6 && "justify-center"
      )}>
          
        <div>
        {isThreeD ? (
            <div className="w-full h-full absolute inset-0">
            <img 
              src={img as string} 
              className={cn(
                "object-cover object-center w-full h-full",
                imgClassName,
                id === 5 && "absolute right-0 bottom-0 md:w-96 w-60"
              )} 
              alt="thumbnail"
            />
            </div>
            
          ) : (
            <div className="flex justify-center absolute insert-0 w-full h-full z-10">
              <ThreeScene />
            </div>
          )}
        </div>
        
        
        {spareImg && (
          <div className={cn(
            "absolute right-0 bottom-0",
            id === 5 && "w-full opacity-80"
          )}>
            <img
              src={spareImg as string}
              className="object-cover object-center w-full h-full"
              alt="spare thumbnail"
            />
          </div>
        )}

        {/* Background Animation for ID 6 */}
        {id === 6 && (
          <div className="absolute inset-0">
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
            </BackgroundGradientAnimation>
          </div>
        )}

        {/* Content Section */}
        <div className={cn(
          "relative h-full flex flex-col p-5 lg:p-10",
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200",
          id === 1 && "justify-end",
          id === 6 && "justify-center"
        )}>
          {/* Description */}
          {description && (
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 mb-2">
              {description}
            </div>
          )}
          
          {/* Title */}
          <div className={cn(
            "font-sans font-bold z-10",
            id === 6 ? "text-center md:max-w-full max-w-60 text-lg lg:text-3xl" : "text-lg lg:text-3xl max-w-96",
            id === 1 && "lg:max-w-xl"
          )}>
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};