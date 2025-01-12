import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  UserSquare2,
  FolderPlus, 
  Wallet, 
  FileText, 
  Settings,
  Briefcase,
  LogOut,
  UserCircle,
  ChevronDown
} from 'lucide-react';
import { useUserContext } from './UserContext';

function DashboardSidebar({ isSidebarOpen, toggleSidebar }) {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const {userProfile} = useUserContext();
  const location = useLocation();

  // Navigation items array for better maintenance
  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', exact: true },
    { path: '/dashboard/student', icon: GraduationCap, label: 'Student' },
    { path: '/dashboard/trainer', icon: Users, label: 'Trainer' },
    { path: '/dashboard/clients', icon: UserSquare2, label: 'Clients' },
    { path: '/dashboard/job', icon: Briefcase, label: 'Job' },
    { path: '/dashboard/income', icon: Wallet, label: 'Income' },
    { path: '/dashboard/applications', icon: FileText, label: 'Applications' },
    { path: '/dashboard/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden z-20"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:w-64 z-30 flex flex-col`}
      >
        {/* Header */}
        <div className="p-6 border-b">
          <button
            className="absolute right-4 top-4 p-2 rounded-lg hover:bg-gray-100 sm:hidden"
            onClick={toggleSidebar}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img src="/Lunar.png" alt="Logo" className="w-32 mx-auto mb-2" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = item.exact 
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path);

              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={`
                      flex items-center px-3 py-2.5 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-blue-500 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-blue-50'
                      }
                    `}
                    onClick={() => {
                      if (window.innerWidth < 640) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <item.icon className={`w-5 h-5 mr-3 ${
                      isActive ? 'text-white' : 'text-gray-500'
                    }`} />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="border-t p-4">
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center">
                <UserCircle className="w-8 h-8 text-gray-600 mr-3" />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-700">{userProfile.fullName}</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  isProfileOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute bottom-full left-0 w-full mb-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) => `
                    flex items-center px-4 py-3 transition-colors
                    ${isActive 
                      ? 'bg-gray-100 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <UserCircle className="w-5 h-5 mr-3" />
                  View Profile
                </NavLink>
                <button
                  onClick={() => {/* Add logout logic */}}
                  className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardSidebar;