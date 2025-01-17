import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  LibraryBig,
  User,
  BookOpen,
  UserSquare2,
  FolderPlus,
  Wallet,
  FileText,
  Settings,
  Briefcase,
  LogOut,
  UserCircle,
  Package,
  ChevronDown,
  Bell,
  Settings2
} from 'lucide-react';
import { useUserContext } from './UserContext';

function DashboardSidebar({ isSidebarOpen, toggleSidebar }) {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const { userProfile } = useUserContext();
  const location = useLocation();
  const profileRef = React.useRef(null);

   // Close profile dropdown when clicking outside
   React.useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  // Navigation items array for better maintenance
  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', exact: true },
    { path: '/dashboard/student', icon: GraduationCap, label: 'Student' },
    { path: '/dashboard/clients', icon: UserSquare2, label: 'Clients' },
    { path: '/dashboard/employee', icon: User, label: 'Employee' },
    { path: '/dashboard/course', icon: LibraryBig, label: 'Course' },
    { path: '/dashboard/job', icon: Briefcase, label: 'Job' },
    { path: '/dashboard/program', icon: BookOpen, label: 'Program' },
    { path: '/dashboard/applications', icon: FileText, label: 'Applications' },
    { path: '/dashboard/product', icon: Package, label: 'Product' },
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
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                        ? 'bg-blue-500 text-white shadow-md hover:bg-blue-600'
                        : 'text-gray-700 hover:bg-blue-50'
                      }
                    `}
                    onClick={() => {
                      if (window.innerWidth < 640) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-gray-500'
                      }`} />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

         {/* Profile Section */}
         <div className="border-t p-4" ref={profileRef}>
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <UserCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left ml-3">
                  <p className="text-sm font-medium text-gray-700">{userProfile.fullName}</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute bottom-full right-0 mb-2 w-56 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden transform origin-bottom-right transition-all duration-200 ease-in-out">
                <div className="p-4 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">{userProfile.fullName}</p>
                  <p className="text-xs text-gray-500">administrator@lunar.com</p>
                </div>
                
                <div className="p-2">
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) => `
                      flex items-center px-3 py-2 rounded-lg transition-colors
                      ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"}
                    `}
                  >
                    <UserCircle className="w-5 h-5 mr-3" />
                    <span className="text-sm">View Profile</span>
                  </NavLink>
                  
                  <NavLink
                    to="/dashboard/notifications"
                    className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Bell className="w-5 h-5 mr-3" />
                    <span className="text-sm">Notifications</span>
                  </NavLink>
                  
                  <NavLink
                    to="/dashboard/settings"
                    className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Settings2 className="w-5 h-5 mr-3" />
                    <span className="text-sm">Settings</span>
                  </NavLink>
                </div>
                
                <div className="p-2 border-t border-gray-100">
                  <button
                    onClick={() => {
                      // Add logout logic
                    }}
                    className="w-full flex items-center px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    <span className="text-sm font-medium">Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardSidebar;