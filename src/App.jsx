import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

// Context for user profile
import { UserProvider } from "./Components/Dashboard/UserContext";
import UserProfile from './Components/Dashboard/UserProfile';


// Auth
import SignupLogin from './Components/auth/SignupLogin';
import ForgetPassword from './Components/auth/ForgetPassword';
import ResetPassword from './Components/auth/ResetPassword';
import SetNewPassword from './Components/auth/SetNewPassword';

// Error page
import Error from './Components/Error';

// Dashboard
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './Components/Dashboard/Dashboard';

// Students Dashboard
import StudentDashboard from './Components/Dashboard/students/StudentDashboard';

// Employee Dashboard
import EmployeeDashboard from './Components/Dashboard/Employee/EmployeeDashboard';

// Job Dashboard
import JobDashboard from './Components/Dashboard/Job/JobDashboard';

// Course Dashboard
import CourseDashboard from './Components/Dashboard/Course/CourseDashboard';


//Home Page
import ContactUs from './Components/Home/ContactUs';
import FeaturesDetail1 from './Components/Home/FeaturesDetail1';
import FeaturesDetail2 from './Components/Home/FeaturesDetail2';
import OurCourses from './Components/Home/OurCourses';
import Features from './Components/Home/Features';
import HomeLayout from './layouts/HomeLayout';
import Banner from './Components/Home/Banner';
import About from './Components/Home/About';
import OurProducts from './Components/Home/OurProducts';
import JobForm from './Components/Home/JobForm';
import Faq from './Components/Home/Faq';
import ApplyForNewCourse from './Components/Home/ApplyForNewCourse';
import ApplicationDashboard from './Components/Dashboard/Application/ApplicationDashboard';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path='banner' element={<Banner />} />
            <Route path='about' element={<About />} />
            <Route path='features/'>
              <Route index element={<Features />} />
              <Route path='featuresDetail1' element={<FeaturesDetail1 />} />
              <Route path='featuresDetail2' element={<FeaturesDetail2 />} />
            </Route>
            <Route path='ourproducts' element={<OurProducts />} />
            <Route path='courses/'>
              <Route index element={<OurCourses />} />
              <Route path='applyForNewCourse' element={<ApplyForNewCourse />} />
            </Route>
            <Route path='contact' element={<ContactUs />} />
            <Route path='JobForm' element={<JobForm />} />
            <Route path='faq' element={<Faq />} />
          </Route>


          {/* For auth */}
          <Route path='auth/'>
            <Route path='login' element={<SignupLogin />} />
            <Route path='forgetPassword' element={<ForgetPassword />} />
            <Route path='resetPassword/'>
              <Route index element={<ResetPassword />} />
              <Route path='setNewPassword' element={<SetNewPassword />} />
            </Route>
          </Route>


          {/* For dashboard */}
          <Route path='dashboard/' element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='profile' element={<UserProfile />} />
            <Route path='student/' element={<StudentDashboard />} />
            <Route path='employee/' element={<EmployeeDashboard/>}/>
            <Route path='job/' element={<JobDashboard/>}/>
            <Route path='applications/' element={<ApplicationDashboard/>}/>
            <Route path='course/' element={<CourseDashboard/>}/>
          </Route>

          {/* For error */}
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
