import profileImg from "../assets/react.svg";
import { FaMapMarkerAlt, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <div className="max-w-5xl mx-auto p-2 bg-white border border-gray-200 rounded-xl shadow-sm">

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

        {/* Profile Image */}
        <img
          src={profileImg}
          alt="Rahul Kumar"
          className="w-28 h-28 rounded-full object-cover border-4 border-gray-100 shadow"
        />

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left">

          {/* Name */}
          <h1 className="text-3xl md:text-4xl [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-bold text-gray-900">
            Rahul Kumar
          </h1>

          {/* Role */}
          <p className="text-gray-600 mt-1 text-lg [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-medium">
            Frontend / UI Developer (React.js)
          </p>

          {/* Divider */}
          <div className="h-1 w-16 bg-blue-600 rounded-full mt-3 mb-4 mx-auto md:mx-0"></div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-gray-700 text-sm">

            <div className="flex items-center [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] gap-2">
              <FaPhoneAlt className="text-blue-600" />
              <span>+91-7766071191</span>
            </div>

            <div className="flex [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              <span>merahullogan7@gmail.com</span>
            </div>

            <div className="flex [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Site no 12, Opposite to victorean meadows, Munnekolala, marathalli, bengaluru 
Pin - 560037</span>
            </div>

          </div>

          {/* LinkedIn */}
          <div className="mt-4">
            <a
              href= "https://www.linkedin.com/in/rahul-kumar-796286224/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              <FaLinkedin />
              linkedin.com/in/rahul-kumar
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Header;
