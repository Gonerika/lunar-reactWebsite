import React, { useEffect } from 'react'
import Banner from '../Components/Home/Banner';
import About from '../Components/Home/About';
import Faq from '../Components/Home/Faq';
import ContactUs from '../Components/Home/ContactUs';
import JobForm from '../Components/Home/JobForm';
import OurProducts from '../Components/Home/OurProducts';
import Features from '../Components/Home/Features';
import OurClients from '../Components/Home/OurClients';
import OurCourses from '../Components/Home/OurCourses';

function Home() {
  return (
    <>
      <Banner/>
      <About/>
      <OurCourses/>
      <Faq/>
      <ContactUs/>
      <Features/>
      <JobForm/>
      <OurProducts/>
      <OurClients/>
    </>
  )
}
export default Home;
