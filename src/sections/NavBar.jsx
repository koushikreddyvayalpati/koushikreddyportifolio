import { useState } from 'react';
import PropTypes from 'prop-types';
import { navLinks } from '../constants/Index';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul flex">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

NavItems.propTypes = {
  onClick: PropTypes.func,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <section className="c-space my-20">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-5 px-5 sm:px-10">
            <a
              href="/"
              className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
            >
              Vayalpati Koushik Reddy
            </a>

            {/* Right Side: Icons + Nav Links */}
            <div className="flex items-center">
              {/* Social Icons */}
              <div className="flex items-center">
                <a
                  href="https://github.com/koushikreddyvayalpati"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.62-4.04-1.62-.54-1.36-1.33-1.72-1.33-1.72-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.5.12-3.12 0 0 1-.32 3.3 1.23a11.44 11.44 0 013-.4c1.02 0 2.04.14 3 .4 2.31-1.55 3.3-1.23 3.3-1.23.66 1.62.24 2.82.12 3.12.77.84 1.24 1.91 1.24 3.22 0 4.59-2.8 5.61-5.48 5.91.44.38.82 1.14.82 2.29v3.39c0 .32.22.69.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/vayalpatikoushikreddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-neutral-400 hover:text-white transition-colors ml-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM8.3 20.4h-3.5v-10.4h3.5v10.4zM6.5 8.6c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1zM20.4 20.4h-3.5v-5.6c0-1.3-.5-2.2-1.8-2.2-.9 0-1.5.6-1.7 1.1-.1.3-.1.8-.1 1.2v5.5h-3.5s.1-9 0-10.4h3.5v1.5c.5-.8 1.3-2 3.2-2 2.3 0 4 1.5 4 4.7v6.2z" />
                  </svg>
                </a>
              </div>

              {/* Nav Links */}
              <nav className="hidden sm:flex ml-4">
                <NavItems />
              </nav>
            </div>

            <button
              onClick={toggleMenu}
              className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
              aria-label="Toggle menu"
            >
              <img
                src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
                alt="toggle"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* For small screens */}
        <div
          className={`nav-sidebar ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <nav className="p-5">
            <NavItems onClick={closeMenu} />
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
