import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8" />
              <span className="font-bold text-xl">UDAYA INFRASTRUCTURE</span>
            </div>
            <p className="text-gray-200">
              Building excellence through innovation and dedication. Your trusted partner in construction.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/udayabout" className="text-gray-200 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/udayservices" className="text-gray-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/udaycontact" className="text-gray-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/udayservices?type=window" className="text-gray-200 hover:text-white transition-colors">Window Solutions</Link></li>
              <li><Link href="/udayservices?type=warranty" className="text-gray-200 hover:text-white transition-colors">Warranty Services</Link></li>
              <li><Link href="/udayservices?type=door" className="text-gray-200 hover:text-white transition-colors">Door Systems</Link></li>
              <li><Link href="/udayservices?type=interior-design" className="text-gray-200 hover:text-white transition-colors">Interior Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-6 w-8 text-gray-200" />
                <span className="text-gray-200">UDAYA INFRASTRUCTURE, Mubharak Nagar, Nizamabad</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-200" />
                <span className="text-gray-200">+91-97018028077, 9700919166</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-200" />
                <span className="text-gray-200">naveenbattu1993@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} UDAYA INFRASTRUCTURE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
