import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-black via-gray-900 to-black text-white py-6 border-t border-cyan-700 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Osama Rahmani</span>. All rights reserved.
        </p>

        <p className="text-sm text-gray-400">
          Developed with 💙 by <span className="text-cyan-400 font-semibold">Osama Rahmani</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
