import React, { useState } from 'react'
import aminStyles from './adminStyles.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Admin = () => {
     const [data, setData] = useState({
            email: "",
            password:""
        })
 const navigate = useNavigate();
  const changeHandler = (e) => {
    setData({...data, [e.target.name] : e.target.value})
    }
    const adminLoginCheck = (e) => {
        e.preventDefault(); 
    axios.post(`https://backend4pmjuly26.onrender.com/login`, data)
      .then(res => {
          if (res.data.message === "Invalid User")
          {
              alert("Invalid User")
          }
          else if (res.data.message === "Invalid Password")
          {
              alert("Invalid Password")
          }
          else
          {
              navigate("/admindashboard");
        }
      })
      .catch(err => {
        alert(res.data.message)
      })    
    }
  return (
    <main>
            <section className={aminStyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Admin Login</h1>          
                        </div>
                    </div>
                </div>
            </section>  
              <section className={`pt-5 pb-4`}>
                <div className="container">
                    <div className="row">
                          <div className={`col-md-4 mx-auto ${aminStyles.bx_shadow} ${aminStyles.bgnew1}`}>
                          <form onSubmit={adminLoginCheck}>
                              <div className='row'>
                                  <div className='col-md-12'>
                                      <div className='mb-4'>
                                          <input type='text' name="email" placeholder='UserName'   value={data.email} onChange={changeHandler} className='form-control' />
                                      </div>
                                  </div>
                                  <div className='col-md-12'>
                                      <div className='mb-4'>
                                          <input type='password' name="password" value={data.password} onChange={changeHandler} placeholder='Password' className='form-control' />
                                      </div>
                                    </div>                             
                              
                                  <div className='col-md-12'>
                                      <div className='mb-4'>
                                          <input type='submit' value="Admin Login" className='btn btn-success' />
                                      </div>
                                    </div>
                              </div>
                          </form>
                          
                          <div className='d-flex justify-content-between'>
                              <div>
                                  <NavLink to="/forgotpassword">Forgot Password!</NavLink>
                              </div>
                               <div>
                                  <NavLink to="/register">Create New User?</NavLink>
                              </div>
                          </div>
                          </div>                      
                    </div>     
                </div>
            </section>
        </main>
  )
}

export default Admin