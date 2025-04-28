import React from 'react';
import { motion } from 'framer-motion';

type SubmenuItem = {
  title: string;
  description?: string;
  url: string;
  icon?: React.ReactNode;
};

interface NavbarSubmenuProps {
  items: SubmenuItem[];
}

const NavbarSubmenu: React.FC<NavbarSubmenuProps> = ({ items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-black/90 backdrop-blur-md ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
    >
      <div className="py-2 grid gap-1">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="block px-4 py-3 text-sm text-gray-200 hover:bg-gray-800 transition-colors rounded-md mx-1"
          >
            <div className="font-medium">{item.title}</div>
            {item.description && (
              <p className="mt-1 text-xs text-gray-400">{item.description}</p>
            )}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default NavbarSubmenu;