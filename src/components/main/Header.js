'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import LinkButton from '../ui/link-button';
import Logo from '../Logo';
const Header = ({ bgcolor }) => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`headerMainVisa bg-white shadow-sm ${
        scrolled ? 'bg-white' : ''
      }`}
    >
      <nav className="container navbarMainVisa" aria-label="Main navigation">
        <div className="flex items-center w-full md:justify-between  md:space-x-12">
          <Link href="/" className="space-x-4" aria-label="Home">
            {scrolled ? <Logo /> : <Logo />}
          </Link>

          <ul
            className={
              click
                ? 'nav-menuMainVisa active md:space-y-0 space-y-0 py-5 gap-4'
                : 'nav-menuMainVisa gap-4'
            }
          >
            <li className="relative hidden md:block">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-sm font-semibold cursor-pointer hover:text-gray-900 text-gray-800"
              >
                Home
              </Link>
            </li>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary text-gray-800 hover:text-gray-900"
              >
                <span className="w-2 h-2 bg-gray-900" aria-hidden="true"></span>
                Home
              </Link>
            </li>
            {/* for mobile end */}
            <li className="relative hidden md:block">
              <Link
                href="/about-us"
                onClick={closeMenu}
                className="text-sm font-semibold cursor-pointer hover:text-gray-900 text-gray-800"
              >
                About Us
              </Link>
            </li>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="/about-us"
                onClick={closeMenu}
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary text-gray-800 hover:text-gray-900"
              >
                <span className="w-2 h-2 bg-gray-900" aria-hidden="true"></span>
                About Us
              </Link>
            </li>

            <li className="relative hidden md:block">
              <Link
                href="/blog"
                onClick={closeMenu}
                className="text-sm font-semibold cursor-pointer hover:text-gray-900 text-gray-800"
              >
                Blogs
              </Link>
            </li>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="/blog"
                onClick={closeMenu}
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary text-gray-800 hover:text-gray-900"
              >
                <span className="w-2 h-2 bg-gray-900" aria-hidden="true"></span>
                Blogs
              </Link>
            </li>

            <li className="hidden nav-desk md:block">
              <LinkButton
                className="text-white"
                href="/contact-us"
                onClick={closeMenu}
              >
                Contact Us
              </LinkButton>
            </li>

            {/* for mobile start */}
            <li className="block px-2 pt-5 md:pt-0 md:hidden">
              <LinkButton
                href="/contact-us"
                onClick={closeMenu}
                className="text-white hover:text-gray-900"
              >
                Contact Us
              </LinkButton>
            </li>
            {/* for mobile end */}
          </ul>
        </div>

        <div className="hamburgerMainVisa">
          <button
            onClick={handleClick}
            aria-label={click ? 'Close menu' : 'Open menu'}
            aria-expanded={click}
            className="focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {click ? (
              <FaTimes size={30} style={{ color: '#000' }} aria-hidden="true" />
            ) : (
              <FaBars size={30} style={{ color: '#000' }} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      {bgcolor ? (
        <hr
          className={
            scrolled ? 'bg-black text-black' : 'bg-black  w-[93%] mx-auto'
          }
        />
      ) : null}
    </div>
  );
};

export default Header;
