import { Link } from "react-router";
import logo from "../assets/logo.png";
import { RiLinkedinFill, RiFacebookFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="bg-[#001931]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" className="w-10 h-10"/>
            <h2 className="font-bold text-white">HERO.IO</h2>
          </Link>
          <p className="text-gray-400 mt-4 text-sm">
            Discover, explore, and install innovative applications easily.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/apps" className="hover:text-white">All Apps</Link></li>
            <li><Link to="/installation" className="hover:text-white">Installation</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Social Media Apps</li>
            <li>Productivity Apps</li>
            <li>Entertainment Apps</li>
            <li>Utility Apps</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Social Links</h3>
          <div className="flex gap-4 mt-4">
            <a
              href="https://linkedin.com/company/your-company" // replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinFill className="text-white text-2xl"/>
            </a>
            <a
              href="https://facebook.com/your-page" // replace with your Facebook
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookFill className="text-white text-2xl"/>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 mt-8 " />
      <p className="text-gray-400 text-center mt-4 pb-2">© 2026 HERO.IO - All rights reserved.</p>
    </div>
  );
}