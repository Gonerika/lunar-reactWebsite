import React from 'react';
import { Search, Plus, Menu, NotebookIcon } from 'lucide-react';

function DashboardHeader({ toggleSidebar }) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Notification Bar */}
          <div class="relative p-2 rounded-lg">
            <svg class="w-5 h-5 text-black animate-wiggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17" />
            </svg>
            <div class="px-1 py-0.5 bg-red-400 min-w-5 rounded-full text-center text-white text-xs absolute -top-1 -end-0 translate-x-1/4 text-nowrap">
              <div class="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-red-400 w-full h-full"></div>
              3
            </div>
          </div>

          {/* Add New Button */}
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
            <Plus className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Add New</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;