import React from 'react'
import innerpageStyles from './innerStyles.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
const Doctors = () => {
    const { trename } = useParams();
    const [data, setData] = useState("");
    const [docdata, setDocData] = useState([]);
    useEffect(() => {
    axios.get(`https://backend4pmjuly26.onrender.com/treatment/${trename}`)
      .then(res => {
        setData(res.data.sdata);     
      })
      .catch(err => {
      console.log(err);      
    })

     axios.get(`https://backend4pmjuly26.onrender.com/doctors/${trename}`)
      .then(res => {
       setDocData(res.data.sdata);
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
                    <h1>{trename}</h1>          
                    </div>
                </div>
            </div>
        </section>
        <section className={`pt-5 pb-3 ${innerpageStyles.treatments}`}>
            <div className="container">
                <div className="row">
                      <div className='col-md-12'>
                          <p>{data.tdesc}</p>
                     </div>
                  </div>
                  <div className="row">
                      <div className="col-md-8">
                    {docdata.map((doc) => (                      
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="card border-0"  key={doc._id}>
                          <div className="card-body">
                            <h5 className="card-title">{doc.dname}</h5>
                            <p className="card-text">Experience: {doc.experience}</p>
                            <p className="card-text">Qualification: {doc.qualification}</p>
                            <p className="card-text">Email: {doc.email}</p>
                            <p className="card-text">Phone: {doc.phone}</p>
                            <p className="card-text">Address: {doc.address}</p>
                          </div>
                            </div>
                            <div>
                                <NavLink to={`/bookappointment/${doc.dname}/${doc.tname}`}>
                                    <button className='btn btn-primary mt-3 mb-3'>Book Appointment</button>
                                    </NavLink>
                                </div>
                            </div>
                    ))}
                      </div>                      
                      </div>
            </div>
        </section>
    </main>
  )
}

export default Doctors