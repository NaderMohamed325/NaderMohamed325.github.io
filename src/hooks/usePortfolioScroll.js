import { useEffect, useState } from 'react';

export function usePortfolioScroll(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? 'home');
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);

      const sectionElements = sectionIds.map((id) => document.getElementById(id));

      for (let i = sectionElements.length - 1; i >= 0; i -= 1) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= currentScrollY + 200) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return { activeSection, scrollY, isScrolled };
}
