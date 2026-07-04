import React, { useState } from 'react'
import innerpageStyles from './innerStyles.module.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const StudentEdit = () => { 
  const [data, setData] = useState("");
  const navigate = useNavigate();
    const { stuid } = useParams();

    useEffect(() => {
    axios.get(`http://localhost:5000/student/${stuid}`)
      .then(res => {
      setData(res.data.sdata);     
      })
      .catch(err => {
      console.log(err);      
    })
  },[])

  const changeStudentData = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }

  const addUpdatedStudentData = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/student/${stuid}`, data)
      .then(res => {
        alert(res.data.message);
        navigate("/editstudent");
      })
      .catch(err => {
      alert("Unable to Update the Student Data")
    })
  }
  return (
     <main>
              <section className={innerpageStyles.bread}>
                  <div className="container">
                     <div className="row">
                          <div className="col-md-12">
                          <h1>Student Edit</h1>          
                          </div>
                        </div>
                    </div>
              </section>
              <section className='py-5'>
                  <div className="container">
                     <div className="row">
                          <div className="col-md-4 mx-auto">
                            <div className={innerpageStyles.bx_shadow}>
                <form>
                  <div className='mb-4'>
                    <input type='text' name='name' value={data.name} onChange={changeStudentData} placeholder='Name' className='form-control' />
                  </div>
                  <div className='mb-4'>
                    <input type='email' name='email' value={data.email} onChange={changeStudentData}  placeholder='Email' className='form-control' />
                  </div>
                  <div className='mb-4'>
                    <input type='text' name='phone' value={data.phone} onChange={changeStudentData}  placeholder='Phone' className='form-control' />
                  </div>
                  <div className='mb-4'>
                    <input type='text' name='address' value={data.address} onChange={changeStudentData}   placeholder='Address' className='form-control' />
                  </div>
                  <div className='mb-2'>
                    <input type='button' value="Edit Student" className='btn btn-success' onClick={addUpdatedStudentData} />
                  </div>
                              </form>
                            </div>     
                          </div>
                        </div>
                    </div>
              </section>
        </main>
  )
}

export default StudentEdit