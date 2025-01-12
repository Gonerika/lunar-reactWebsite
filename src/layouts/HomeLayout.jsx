import React, { useState } from 'react'
import Nav from '../Components/Home/Nav'
import Footer from '../Components/Home/Footer'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  const [isHomePage, setIsHomePage] = useState(false);

  const handleHomePage = (data = false) => {
    setIsHomePage(data);
  }
  return (
    <>
      <div>
        <Nav />
        <main
          className={`flex-grow ${isHomePage
              ? "mt-0" // No margin for the Home Page
              : "mt-0" // Add spacing for other pages
            }`}
        >
          <Outlet handleHomePage={handleHomePage} isHomePage={isHomePage} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default HomeLayout