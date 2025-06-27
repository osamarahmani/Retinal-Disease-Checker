// src/pages/Contact.jsx
import { useState } from "react";

import { FaEnvelope, FaLinkedin, FaGlobe } from "react-icons/fa";

function Contact() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-10 drop-shadow-lg text-center">
        Let’s Connect
      </h1>

      {!showInfo ? (
        <button
          onClick={() => setShowInfo(true)}
          className="bg-cyan-600 hover:bg-cyan-400 text-white text-lg px-6 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Show Contact Info
        </button>
      ) : (
        <div className="w-full max-w-xl space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-white/10 border border-cyan-400 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <FaEnvelope className="text-cyan-300 text-2xl" />
            <span className="text-lg md:text-xl truncate">
              Send Mail
            </span>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 p-4 bg-white/10 border border-cyan-400 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <FaLinkedin className="text-cyan-300 text-2xl" />
            <a
              href="https://www.linkedin.com/in/osamarahmani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl hover:text-cyan-400 transition-all truncate"
            >
              Connect With Linkdin
            </a>
          </div>

          {/* Portfolio */}
          <div className="flex items-center gap-4 p-4 bg-white/10 border border-cyan-400 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <FaGlobe className="text-cyan-300 text-2xl" />
            <a
              href="https://osamarahmani.github.io/Osama-WebDEV/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl hover:text-cyan-400 transition-all truncate"
            >
              Portfolio
            </a>
          </div>

          <button
            onClick={() => setShowInfo(false)}
            className="mt-6 text-sm text-cyan-300 hover:underline"
          >
            Hide Info
          </button>
        </div>
      )}
    </div>
  );
}

export default Contact;