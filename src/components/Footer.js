import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h5 className="uppercase text-gray-700 font-bold mb-4">About Us</h5>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor.
            </p>
            <ul>
              <li><a href="/" className="hover:text-gray-900">Our Story</a></li>
              <li><a href="/" className="hover:text-gray-900">Mission & Vision</a></li>
              <li><a href="/" className="hover:text-gray-900">Meet the Team</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h5 className="uppercase text-gray-700 font-bold mb-4">Quick Links</h5>
            <ul>
              <li><a href="/" className="hover:text-gray-900">Home</a></li>
              <li><a href="/" className="hover:text-gray-900">About Us</a></li>
              <li><a href="/" className="hover:text-gray-900">Services</a></li>
              <li><a href="/" className="hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h5 className="uppercase text-gray-700 font-bold mb-4">Get in Touch</h5>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2" /> +1 555 555 5555
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@gymfitness.com" className="hover:text-gray-900">info@gymfitness.com</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 123 Main St, Anytown, USA
              </li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <a href="/" aria-label="Facebook" className="hover:text-gray-900">
                <FaFacebook />
              </a>
              <a href="/" aria-label="Twitter" className="hover:text-gray-900">
                <FaTwitter />
              </a>
              <a href="/" aria-label="Instagram" className="hover:text-gray-900">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <h5 className="uppercase text-gray-700 font-bold mb-4">Opening Hours</h5>
            <ul className="space-y-2">
              <li>Monday: 5:00 AM - 10:00 PM</li>
              <li>Tuesday: 5:00 AM - 10:00 PM</li>
              <li>Wednesday: 5:00 AM - 10:00 PM</li>
              <li>Thursday: 5:00 AM - 10:00 PM</li>
              <li>Friday: 5:00 AM - 10:00 PM</li>
              <li>Saturday: 8:00 AM - 8:00 PM</li>
              <li>Sunday: 8:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 text-gray-600 text-center p-4">
        <p>&copy; 2024 Gym Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
