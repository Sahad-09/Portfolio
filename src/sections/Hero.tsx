import ArrowDown from "@/assets/icons/arrow-down.svg";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg"
import StarIcon from "@/assets/icons/star.svg"
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-clip  ">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`
          }}
        ></div>
        <div className=" size-[620px] hero-ring"></div>
        <div className=" size-[820px] hero-ring"></div>
        <div className=" size-[1020px] hero-ring"></div>
        <div className=" size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={1}>
          <StarIcon className=" size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={-100}>
          <StarIcon className=" size-18 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={300} rotation={-1000}>
          <StarIcon className=" size-7 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container ">
        <div className=" flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className=" bg-green-500 size-2.5 rounded-full "></div>
            <div className=" text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional, high-performing
            web applications. Let&apos;s discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className=" font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className=" inline-flex items-center gap-2 border bg-white border-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};