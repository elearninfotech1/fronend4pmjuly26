import React from 'react'
import innerpageStyles from './innerStyles.module.css'
const BookAppointment = () => {
  return (
     <main>
        <section className={innerpageStyles.bread}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1>Contact Us</h1>          
                    </div>
                </div>
            </div>
        </section>
        <section className={`py-5 ${innerpageStyles.contactus}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                          <div className={innerpageStyles.bx_shadow}>
                              <div className='text-center'>
                                  <div className={innerpageStyles.contactusicons}>
                                      <i class="fa-solid fa-map"></i>
                                  </div>
                                  <h5 className='mb-3'>Elearn Infotech</h5>
                                  <p>Plot Number 40, Second Floor, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className={innerpageStyles.bx_shadow}>
                              <div className='text-center'>
                                  <div className={innerpageStyles.contactusicons}>
                                      <i class="fa-solid fa-phone"></i>
                                  </div>
                                  <h5 className='mb-3'>Phone</h5>
                                  <p>+91 9133102210, <br />+91 8464025086</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className={innerpageStyles.bx_shadow}>
                              <div className='text-center'>
                                  <div className={innerpageStyles.contactusicons}>
                                      <i class="fa-solid fa-envelope"></i>
                                  </div>
                                  <h5 className='mb-3'>Email ID</h5>
                                  <p>info@elearninfotech.com, hr@elearninfotech.com</p>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
          </section>
          
          <section className={`pt-5 pb-4 ${innerpageStyles.bggray}`}>
            <div className="container">
                <div className="row">
                      <div className={`col-md-7 mx-auto ${innerpageStyles.bx_shadow} ${innerpageStyles.bgnew1}`}>
                          <div className='row'>
                              <div className='col-md-6'>
                                  <div className='mb-4'>
                                      <input type='text' name="name" placeholder='Name' className='form-control' />
                                  </div>
                              </div>
                              <div className='col-md-6'>
                                  <div className='mb-4'>
                                      <input type='text' name="email" placeholder='Email' className='form-control' />
                                  </div>
                                </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-6'>
                                  <div className='mb-4'>
                                      <input type='text' name="phone" placeholder='Phone' className='form-control' />
                                  </div>
                              </div>
                              <div className='col-md-6'>
                                  <div className='mb-4'>
                                      <input type='text' name="subject" placeholder='Subject' className='form-control' />
                                  </div>
                                </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-12 mb-4'>
                                  <textarea name='message' placeholder='Message' className='form-control'></textarea>
                              </div>
                              <div className='col-md-12'>
                                  <div className='mb-4'>
                                      <input type='submit' value="Send Message" className='btn btn-success' />
                                  </div>
                                </div>
                          </div>
                      </div>                      
                </div>     
            </div>
        </section>
    </main>
  )
}

export default BookAppointment