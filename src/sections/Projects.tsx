import NGO from "@/assets/images/ngo.png";
import Doc from "@/assets/images/doc.png";
import Builder from "@/assets/images/builder.png";
import Image from "next/image";
import CheckCirlceIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import GrainImage from "@/assets/images/grain.jpg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Build Up Kasaragod",
    year: "2022",
    title: "Empowering Communities with Build Up Kasaragod",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.buildupkasaragod.org",
    image: NGO,
  },
  {
    company: "Personalized Patient Management Application",
    year: "2021",
    title: "Streamlining Healthcare: Personalized Patient Management Application",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://docpriv.vercel.app",
    image: Doc,
  },
  {
    company: "Hindustan Builders",
    year: "2023",
    title: "Hindustan Builders: Designing Dreams, Building Futures",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.hindustanbuilders.in",
    image: Builder,
  },
];


export const ProjectsSection = () => {
  return (
    <div className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="  See how I transformed concepts into engaging digital experiences." />
        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 40}px `
              }}
            >
              <div className=" lg:grid lg:grid-cols-2 lg:gap-16">
                <div className=" lg:pb-16">
                  <div className="bg-gradient-to-r from-[#DF3750] to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className=" flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCirlceIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a >
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8   md:w-auto px-6">
                      <span>View Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className=" relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div >
  )
};