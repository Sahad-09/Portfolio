import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"

const footerLinks = [
  {
    title: 'YouTube',
    href: 'https://www.youtube.com/@sahadpop4135',
  },
  {
    title: 'Twitter',
    href: 'https://x.com/Sahad_pop',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/sahad__.x',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sahad-pop',
  },
];

export const Footer = () => {
  return (
    <footer className="relative  overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-[#DF3750]/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved. jb</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 z-50">
            {footerLinks.map((link) => (
              <a
                target="blank"
                key={link.title}
                href={link.href}
                className="inline-flex items-center gap-1.5 z-60 cursor-pointer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
