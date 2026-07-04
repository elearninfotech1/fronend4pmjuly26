import React, { useState } from 'react'
import aminStyles from './adminStyles.module.css'
import axios from 'axios'
const AddDoctor = () => {
   const [data, setData] = useState({
     tname: "",
     dname: "",
     experience: "",
     qualification: "",
     email: "",
     phone: "",
     address: "",
   })
  
  const changeHandler = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }
  
  const addDoctorData = (e) => {
     e.preventDefault(); 
    axios.post(`https://backend4pmjuly26.onrender.com/doctors`, data)
      .then(res => {
        alert(res.data.message);
        setData({
          tname: "",
          dname: "",
          experience: "",
          qualification: "",
          email: "",
          phone: "",
          address: ""
        })
      })
      .catch(err => {
        alert(res.data.message)
      })    
  }
  return (
    <section>
                <div className="container">
                    <div className="row">
                          <div className={`col-md-8 ${aminStyles.bx_shadow} ${aminStyles.bgnew1}`}>
                              <form onSubmit={addDoctorData}>
                              <div className='row'>
                                  <div className='col-md-6'>
                                      <div className='mb-4'>
                                          <input type='text' name="tname" value={data.tname} onChange={changeHandler} placeholder='T.Name' className='form-control' />
                                      </div>
                                  </div>
                                  <div className='col-md-6'>
                                      <div className='mb-4'>
                                          <input type='text' name="dname" value={data.dname} onChange={changeHandler} placeholder='D.Name' className='form-control' />
                                      </div>
                                    </div>
                              </div>
                              <div className='row'>
                                  <div className='col-md-6'>
                                      <div className='mb-4'>
                                          <input type='text' name="experience" value={data.experience} onChange={changeHandler}  placeholder='Experience' className='form-control' />
                                      </div>
                                  </div>
                                  <div className='col-md-6'>
                                      <div className='mb-4'>
                                          <input type='text' name="qualification" value={data.qualification} onChange={changeHandler}   placeholder='Qualifications' className='form-control' />
                                      </div>
                                    </div>
                              </div>
                              <div className='row'>
                                  <div className='col-md-6'>
                                      <div className='mb-4'>
                                          <input type='text' name="email" value={data.email} onChange={changeHandler}  placeholder='Email' className='form-control' />
                                      </div>
                                  </div>
                                  <div className='col-md-6'>
                                      <div className='mb-4'>
                                          <input type='text' name="phone" value={data.phone} onChange={changeHandler} placeholder='Phone' className='form-control' />
                                      </div>
                                    </div>
                              </div>
                              <div className='row'>
                                  <div className='col-md-12 mb-4'>
                                      <textarea name='address' value={data.address} onChange={changeHandler} placeholder='Address' className='form-control'></textarea>
                                  </div>
                                  <div className='col-md-12'>
                                      <div className='mb-4'>
                                          <input type='submit' value="Add Doctor" className='btn btn-success' />
                                      </div>
                                    </div>
                          </div>
                          </form>
                        </div>  
                  
                    </div>     
                </div>
            </section>
  )
}

export default AddDoctor