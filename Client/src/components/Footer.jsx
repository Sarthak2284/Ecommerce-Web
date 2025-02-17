import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* Brand & Description */}
        <div>
          <h1 className="text-2xl font-bold tracking-widest">myStyle.</h1>
          <p className="text-sm mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">COMPANY</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About us</a></li>
            <li><a href="/delivery" className="hover:underline">Delivery</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2">
            <li>+1-000-000-0000</li>
            <li>greatstackdev@gmail.com</li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 mt-10 pt-4 text-center">
        <p className="text-sm">
          Copyright 2025 @ greatstack.dev - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
