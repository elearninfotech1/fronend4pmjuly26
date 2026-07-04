import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './InnerPages/AboutUs'
import ContactUs from './InnerPages/ContactUs'
import Admin from './Admin/Admin'
import Registration from './Admin/Registration'
import ForgotPassword from './Admin/ForgotPassword'
import AdminDashboard from './Admin/AdminDashboard'
import AddTreatment from './Admin/AddTreatment'
import DeleteTreatment from './Admin/DeleteTreatment'
import AddDoctor from './Admin/AddDoctor'
import DeleteDoctor from './Admin/DeleteDoctor'
import AddBlog from './Admin/AddBlog'
import DeleteBlog from './Admin/DeleteBlog'
import Treatments from './InnerPages/Treatments'
import Doctors from './InnerPages/Doctors'
import MainPage from './InnerPages/MainPage'
import BookAppointment from './InnerPages/BookAppointment'
import AppontmentData from './Admin/AppontmentData'

const Routing = () => {
  return (
    <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctors/:trename" element={<Doctors />} />
      <Route path="/bookappointment" element={<BookAppointment />} />
      <Route path="/bookappointment/:docname/:tname" element={<BookAppointment />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/register' element={<Registration />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/admindashboard" element={<AdminDashboard />}>
              <Route path="" element={<AddTreatment />} />
              <Route path="deletetratement" element={<DeleteTreatment />} />
              <Route path="adddoctor" element={<AddDoctor />} />
              <Route path="deletedoctor" element={<DeleteDoctor />} />
              <Route path="addblog" element={<AddBlog />} />
        <Route path="deleteblog" element={<DeleteBlog />} />
        <Route path="appointmentdata" element={<AppontmentData />} />
          </Route>
          </Routes>
  )
}

export default Routing