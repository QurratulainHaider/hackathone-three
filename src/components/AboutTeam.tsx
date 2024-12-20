import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FeatureSection: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <div className="container mx-auto py-10 px-4">
        {/* Text Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
            Problems trying to resolve the conflict between
            <br className="hidden sm:block" />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="/images/product/g7.png"
              alt="Card Image 1"
              className="w-full h-48 object-cover rounded-t-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">Username</h2>
            <p className="text-gray-500 mb-4 text-center">
              <span className="text-sm font-semibold text-gray-500">Profession</span>
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#" className="text-blue-400 hover:text-gray-900">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-gray-900">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-gray-900">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="/images/o girl.png"
              alt="Card Image 2"
              className="w-full h-48 object-cover rounded-t-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">Username</h2>
            <p className="text-gray-500 mb-4 text-center">
              <span className="text-sm font-semibold text-gray-500">Profession</span>
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#" className="text-blue-400 hover:text-gray-900">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-gray-900">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-gray-900">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="/images/b boy.png"
              alt="Card Image 3"
              className="w-full h-48 object-cover rounded-t-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-center text-black">Username</h2>
            <p className="text-gray-500 mb-4 text-center">
              <span className="text-sm font-semibold text-gray-500">Profession</span>
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#" className="text-blue-400 hover:text-gray-900">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-gray-900">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-gray-900">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
