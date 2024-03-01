"use client";
import React, { useState } from "react";

const DashboardTest = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`h-full bg-gray-800 text-white ${
          isSidebarOpen ? "w-1/6" : "w-0"
        } transition-all duration-300 ease-in-out overflow-hidden`}
      >
        {/* Sidebar content */}
        <ul>
          <li className="p-4">Dashboard</li>
          <li className="p-4">Analytics</li>
          <li className="p-4">Settings</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow bg-gray-200">
        {/* Button to control sidebar width */}
        <button
          onClick={toggleSidebar}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
        >
          {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
        </button>
      </div>
    </div>
  );
};

export default DashboardTest;
