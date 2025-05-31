import Image from 'next/image';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#ece8e3] text-[#1a1a1a] px-6 md:px-16 lg:px-32 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        
        {/* Brand & Social */}
        <div>
          {/* <p className='text-[#FBAB55] text-2xl font-bold'>Breathe Pilates Studio</p> */}
          <Image src='/logo.png' alt='logo' width={70} height={100} className='rounded-full'/>
          <p className="text-neutral-700 mb-4 py-2">Elevate Movement. Embody Artistry.</p>
          <div className="flex gap-4">
            <a href="#" className="bg-[#D14334] p-3 rounded-full text-white hover:bg-yellow-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-[#D14334] p-3 rounded-full text-white hover:bg-yellow-600 transition">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-neutral-700">
            <li><a href="#" className="hover:text-neutral-500">Home</a></li>
            <li><a href="#" className="hover:text-neutral-500">About</a></li>
            <li><a href="#" className="hover:text-neutral-500">Services</a></li>
            <li><a href="#" className="hover:text-neutral-500">Gallery</a></li>
            <li><a href="#" className="hover:text-neutral-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <div className="flex items-start gap-2 text-neutral-700 mb-2">
            <FaLocationDot className="mt-1" />
            <p>Anniston, AL, United States</p>
          </div>
          <p className="text-neutral-700 mt-2">+1 256-236-4809</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-neutral-700 mb-4">Subscribe to our newsletter to receive updates and news.</p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-[#1a1a1a] mb-4 focus:outline-none focus:border-red-500"
          />
          <button className="bg-[#D14334] text-white font-semibold w-full py-2 rounded-md transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-sm text-neutral-700 gap-4">
        <p>© Noma's School-Gymnastics. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
