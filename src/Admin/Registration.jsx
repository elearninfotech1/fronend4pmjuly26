import React, { useState } from 'react'
import aminStyles from './adminStyles.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Registration = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password:"",
        phone: "",
        address:""
    })
    const navigate = useNavigate();
    
     const changeHandler = (e) => {
    setData({...data, [e.target.name] : e.target.value})
    }
    
    
  const addAdminData = (e) => {
    e.preventDefault(); 
    axios.post(`https://backend4pmjuly26.onrender.com/register`, data)
      .then(res => {
        alert(res.data.message);
        setData({
          name: "",
          email: "",
          password:"",
          phone: "",
          address:""
        })
          navigate("/admin");
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
                        <h1>Admin Register</h1>          
                        </div>
                    </div>
                </div>
            </section>  
              <section className={`pt-5 pb-4`}>
                <div className="container">
                    <div className="row">
                          <div className={`col-md-4 mx-auto ${aminStyles.bx_shadow} ${aminStyles.bgnew1}`}>
                          <form onSubmit={addAdminData}>
                              <div className='row'>
                                  <div className='col-md-12'>
                                            <div className='mb-4'>
                            <input type='text' name='name' value={data.name} onChange={changeHandler} placeholder='Name' className='form-control' />
                        </div>
                                  </div>
                                  <div className='col-md-12'>
                                      <div className='mb-4'>
                                          <input type='text' name="email" value={data.email} onChange={changeHandler}  placeholder='UserName' className='form-control' />
                                      </div>
                                  </div>
                                  <div className='col-md-12'>
                                      <div className='mb-4'>
                                          <input type='password' name="password" value={data.password} onChange={changeHandler}  placeholder='Password' className='form-control' />
                                      </div>
                                  </div>  
                                  
                                  <div className='col-md-12'>
                                      <div className='mb-4'>
                                        <input type='text' name='phone' value={data.phone} onChange={changeHandler}  placeholder='Phone' className='form-control' />
                                      </div>
                                  </div>
                                   <div className='col-md-12'>
                                    <div className='mb-4'>
                                        <input type='text' name='address' value={data.address} onChange={changeHandler}  placeholder='Address' className='form-control' />
                                    </div>
                                  </div>
                              
                                  <div className='col-md-12'>
                                      <div className='mb-4'>
                                          <input type='submit' value="Admin Register" className='btn btn-success' />
                                      </div>
                                    </div>
                              </div>
                          </form>                         
                         
                          </div>                      
                    </div>     
                </div>
            </section>
        </main>
  )
}

export default Registration