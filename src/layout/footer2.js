import React from "react";

export default function Footer2() {
  return (
    <div className=" flex items-center justify-center py-10 px-5 md:px-20">
      {/* Footer Bottom Section */}
      <div className="bg-white w-full max-w-6xl py-6 px-5 mt-5 flex justify-between items-center border-t border-gray-200">
        <div className="text-center text-gray-700">
          <p>Bringing warmth and flavor to every meal.<br/>Join us for a taste of something special.</p>
          <p>©2024 – Made with Love in Munich</p>
        </div>
        <button className="flex items-center border px-4 py-2 rounded-lg hover:bg-gray-100">
          <img
            src="/eng.png" // Replace with actual path to the flag icon
            alt="Language"
            className="w-5 h-5 mr-2"
          />
          <span>English</span>
        </button>
      </div>
    </div>
  );
}
