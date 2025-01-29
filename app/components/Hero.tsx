import MagicButtom from './ui/MagicButtom';
import { Spotlight } from './ui/Spotlight';
import { FloatingDock } from './ui/floating-dock';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { TextHoverEffect } from './ui/text-hover-effect';

const Hero = () => {
   
    const words=`Exploring the Boundaries of Creativity and Technology`
  return (
    <div className="pb-20 pt-36">   
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <div className="h-screen w-screen dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] 
                    absolute top-0 left-0
                    flex items-center justify-center">  
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/> 
            </div>
        
            <div className='flex justify-center relative my-20 z-10'>
                        <div className='max-w-[89vw] md:max-w-2xl
                                lg:max-w-[60vw] flex flex-col items-center justify-center'>
                            <TextHoverEffect text='vinayak'/>
                            <h2 className='uppercase tracking-widest
                                text-xs text-center text-blue-100 max-w-80'>
                                Dynamic web with Next.js
                            </h2>
            
                            <TextGenerateEffect className='flex text-center text-[40px]
                            md:text-5xl lg:text-6xl'words={words} />
                        
                            <div
                        className='flex items-center justify-center'>
                        <a href="" >
                        <MagicButtom title={'show my work'} />  </a>     
                        </div>
                    </div>
             </div>
            
    </div>
  );
};

export default Hero;