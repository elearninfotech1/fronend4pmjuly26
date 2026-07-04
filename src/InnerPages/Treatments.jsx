import React from 'react'
import innerpageStyles from './innerStyles.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Treatments = () => {
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
        <section className={innerpageStyles.bread}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1>Treatments</h1>          
                    </div>
                </div>
            </div>
        </section>
        <section className={`pt-5 pb-3 ${innerpageStyles.treatments}`}>
            <div className="container">
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

export default Treatments