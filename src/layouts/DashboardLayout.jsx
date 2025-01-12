import React, { useState } from 'react'
import DashboardSidebar from '../Components/Dashboard/DashboardSidebar';
import DashboardHeader from '../Components/Dashboard/DashboardHeader';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
        <div className="flex flex-col">
          <DashboardSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

           <div className={`pl-11 bg-gray-100 transition-all duration-300 ease-in-out ml-0 sm:ml-56 ${isSidebarOpen ? "blur-sm" : ""}`}>
            <DashboardHeader toggleSidebar={toggleSidebar}/>

            <div>
              <Outlet/>
            </div>

          </div>
        </div>
    </>
  )
}

export default DashboardLayout