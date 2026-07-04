import React from 'react'
import aminStyles from './adminStyles.module.css'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'
const AdminDashboard = () => {
  return (
     <main>
            <section className={aminStyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Admin Dashboard</h1>          
                        </div>
                    </div>
                </div>
            </section>  
              <section className={`pt-5 pb-4`}>
                <div className="container">
                    <div className="row">
                          <div className="col-md-3">
                            <AdminSidebar />
                      </div>   
                       <div className="col-md-9">
                            <Outlet />
                          </div>  
                    </div>     
                </div>
            </section>
        </main>
  )
}

export default AdminDashboard