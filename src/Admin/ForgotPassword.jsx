import React from 'react'
import aminStyles from './adminStyles.module.css'
const ForgotPassword = () => {
  return (
    <main>
            <section className={aminStyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Forgot Password</h1>          
                        </div>
                    </div>
                </div>
            </section>  
              <section className={`pt-5 pb-4`}>
                <div className="container">
                    <div className="row">
                          <div className={`col-md-4 mx-auto ${aminStyles.bx_shadow} ${aminStyles.bgnew1}`}>
                          <form>
                              <div className='row'>
                                  <div className='col-md-12'>
                                      <div className='mb-4'>
                                          <input type='text' name="email" placeholder='UserName' className='form-control' />
                                      </div>
                                  </div>  
                                  <div className='col-md-12'>
                                      <div className='mb-4'>
                                          <input type='submit' value="Forgot Password" className='btn btn-success' />
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

export default ForgotPassword