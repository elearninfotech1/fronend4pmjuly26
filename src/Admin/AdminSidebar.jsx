import React from 'react'
import { NavLink } from 'react-router-dom'
import aminStyles from './adminStyles.module.css'
const AdminSidebar = () => {
  return (
      <ul className={aminStyles.adminsidebar}>
          <li>
              <NavLink to="">Add Treatment</NavLink>
          </li>
          <li>
              <NavLink to="deletetratement">Delete/Edit Treatment</NavLink>
          </li>
          <li>
              <NavLink to="adddoctor">Add Doctor</NavLink>
          </li>
          <li>
              <NavLink to="deletedoctor">Delete/Edit Doctor</NavLink>
          </li>
           <li>
              <NavLink to="addblog">Add Blog</NavLink>
          </li>
          <li>
              <NavLink to="deleteblog">Delete/Edit Blog</NavLink>
          </li>
          <li>
              <NavLink to="appointmentdata">Appointment Data</NavLink>
          </li>
    </ul>
  )
}

export default AdminSidebar