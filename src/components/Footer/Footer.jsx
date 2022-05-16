import React from 'react';

const Footer = () => (
  <footer className="bg-gray-700">
    <div className="mx-auto max-w-7xl p-2 sm:p-6 lg:p-8">
      <p className="text-white">
        Comics are © {new Date().getFullYear()} Marvel
      </p>
    </div>
  </footer>
);

export default Footer;
