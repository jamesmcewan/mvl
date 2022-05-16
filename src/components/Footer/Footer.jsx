import React from 'react';

const Footer = () => (
  <footer className="bg-rose-900">
    <div className="mx-auto max-w-7xl p-2 sm:p-6 lg:p-8">
      <p className="font-montserrat font-light text-rose-100">
        Comics are © {new Date().getFullYear()} Marvel
      </p>
    </div>
  </footer>
);

export default Footer;
