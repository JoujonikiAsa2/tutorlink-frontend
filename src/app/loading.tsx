import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="relative h-20 w-20 mb-6">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-600 border-r-purple-600 rounded-full animate-spin"></div>
          </div>

          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            TutorLink
          </h2>

          <p className="text-gray-600 text-center mb-4">
            Loading amazing learning experiences for you...
          </p>

          <div className="flex space-x-2">
            <div
              className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
