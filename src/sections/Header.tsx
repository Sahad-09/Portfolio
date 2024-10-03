"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Currently in section:', entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isContactPage = pathname === '/contact';

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur transition duration-300">
        <a
          href="/"
          className={`nav-item ${activeSection === 'home' && !isContactPage ? 'bg-white text-gray-900' : ''}`}
        >
          Home
        </a>
        <a
          href="/#project"
          className={`nav-item ${activeSection === 'project' && !isContactPage ? 'bg-white text-gray-900' : ''}`}
        >
          Projects
        </a>
        <a
          href="/#about"
          className={`nav-item ${activeSection === 'about' && !isContactPage ? 'bg-white text-gray-900' : ''}`}
        >
          About
        </a>
        <a
          href="/contact"
          className={`nav-item ${activeSection === 'contact' || isContactPage
            ? 'bg-white text-gray-900'
            : 'bg-gradient-to-r from-[#DF3750] to-sky-400 text-white'} 
    px-4 py-2 rounded-3xl shadow-lg font-semibold heartbeat`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};