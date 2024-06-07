'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import ThemeSwitcher from '../ThemeSwitcher/TheSwitcher';

const Navbar = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (link) => {
    setShowMenu(false);
    setActiveLink(link);
  };

  useEffect(() => {
    if (isMounted) {
      setShowMenu(false);
    }
  }, [isMobile, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="bg-gray-50 bg-opacity-90 backdrop-blur-sm p-3 dark:bg-gray-800">
      <div className="container mx-auto flex justify-center items-center">
        {isDesktop ? (
          <ul className="flex space-x-4 dark:text-white">
            <li>
              <Link href="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} onClick={() => handleLinkClick('/about')}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`} onClick={() => handleLinkClick('/projects')}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/uses" className={`nav-link ${activeLink === '/uses' ? 'active' : ''}`} onClick={() => handleLinkClick('/uses')}>
                Use
              </Link>
            </li>
          </ul>
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-center cursor-pointer text-xl text-black dark:text-white mb-2" onClick={toggleMenu}>
              Menu
            </div>
            {showMenu && (
              <div className="w-full bg-gray-50 bg-opacity-90 backdrop-blur-sm p-3 dark:bg-gray-800">
                <ul className="flex flex-col items-center space-y-2 dark:text-white">
                  <li>
                    <Link href="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} onClick={() => handleLinkClick('/about')}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`} onClick={() => handleLinkClick('/projects')}>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/uses" className={`nav-link ${activeLink === '/uses' ? 'active' : ''}`} onClick={() => handleLinkClick('/uses')}>
                      Use
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
