import React from 'react'
import innerpageStyles from './innerStyles.module.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const BookAppointment = () => {
    const { docname, tname } = useParams();
    const [data, setData] = useState({
        tname: tname || "",
        dname: docname || "",
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    const changeHandler = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const addAppointmentData = (e) => {
        e.preventDefault();
        axios.post(`https://backend4pmjuly26.onrender.com/appointments`, data)
            .then(res => {
                alert(res.data.message);
                setData({
                    tname: "",
                    dname: "",
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                })
            })
            .catch(err => {
                alert(res.data.message);
            })
    }

  return (
     <main>
        <section className={innerpageStyles.bread}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1>Book Appointment</h1>          
                    </div>
                </div>
            </div>
        </section>
                  
          <section className={`pt-5 pb-4 ${innerpageStyles.bggray}`}>
            <div className="container">
                <div className="row">
                      <div className={`col-md-7 mx-auto ${innerpageStyles.bx_shadow} ${innerpageStyles.bgnew1}`}>
                          <form onSubmit={addAppointmentData}>
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
                                      <input type='text' name="name" value={data.name} onChange={changeHandler} placeholder='Name' className='form-control' />
                                  </div>
                              </div>
                              <div className='col-md-6'>
                                  <div className='mb-4'>
                                      <input type='text' name="email" value={data.email} onChange={changeHandler} placeholder='Email' className='form-control' />
                                  </div>
                                </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-6'>
                                  <div className='mb-4'>
                                      <input type='text' name="phone" value={data.phone} onChange={changeHandler} placeholder='Phone' className='form-control' />
                                  </div>
                              </div>
                              <div className='col-md-6'>
                                  <div className='mb-4'>
                                      <input type='text' name="subject" value={data.subject} onChange={changeHandler} placeholder='Subject' className='form-control' />
                                  </div>
                                </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-12 mb-4'>
                                  <textarea name='message' value={data.message} onChange={changeHandler} placeholder='Message' className='form-control'></textarea>
                              </div>
                              <div className='col-md-12'>
                                  <div className='mb-4'>
                                      <input type='submit' value="Book Appointment" className='btn btn-success' />
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

export default BookAppointment