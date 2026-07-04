import React from 'react'
import innerpageStyles from './innerStyles.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import banner from './banner.jpg';
const MainPage = () => {
     const [data, setData] = useState([]);
    useEffect(() => {
    axios.get(`https://backend4pmjuly26.onrender.com/treatment`)
      .then(res => {
      setData(res.data.sdata);     
      })
      .catch(err => {
      console.log(err);      
    })
  },[])
  return (
      <main>
          <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <img src={banner} alt='Banner' className='img-fluid' />
                    </div>
                </div>
            </div>
          </section>
          <section className={`py-4 ${innerpageStyles.treatments}`}>
              <div className="container">
                  <h1 className='mb-4'>Our <span>Treatments</span></h1>
                <div className="row">
                      {
                          data.map((tredata) => {
                              return (
                                  <div className='col-md-3'>
                                      <NavLink to={`/doctors/${tredata.tname}`}>
                                      <div className={`mb-4 ${innerpageStyles.bx_shadow} p-0`}>
                                          <h6 className='py-3 px-2'>{tredata.tname}</h6>
                                          </div>
                                        </NavLink>
                                </div>                                      
                             )
                         }) 
                    }
                </div>
            </div>
        </section>
    </main>
  )
}

export default MainPage