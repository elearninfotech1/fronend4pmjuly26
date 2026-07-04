import React from 'react'
import innerpageStyles from './innerStyles.module.css'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
const DeleteStudent = () => {
  const [data, setData] = useState([]); //[]
  useEffect(() => {
    axios.get(`http://localhost:5000/student`)
      .then(res => {
      setData(res.data.sdata);     
      })
      .catch(err => {
      console.log(err);      
    })
  })
  
  const deleteStudentData = (sid) => {
    //alert(sid)
     axios.delete(`http://localhost:5000/student/${sid}`)
      .then(res => {
      alert(res.data.message);     
      })
      .catch(err => {
      console.log(err);      
    })
  }

  return (
      <main>
          <section className={innerpageStyles.bread}>
              <div className="container">
                 <div className="row">
                      <div className="col-md-12">
                        <h1>Delete Student</h1>          
                      </div>
                    </div>
                </div>
          </section>
          <section className='py-5'>
              <div className="container">
                 <div className="row">
                      <div className="col-md-12 table-responsive">
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((stu) => {
                      return (
                        <tr key={stu._id}>
                          <td>
                            <button className='btn btn-danger' onClick={()=>deleteStudentData(stu._id)}>
                              <i class="fa-solid fa-trash"></i>
                            </button>
                          </td>
                          <td>{stu.name}</td>
                          <td>{stu.email}</td>
                          <td>{stu.phone}</td>
                          <td>{stu.address}</td>
                        </tr>
                      )
                    })
                    }
                </tbody>
              </table>    
                      </div>
                    </div>
                </div>
          </section>
    </main>
  )
}

export default DeleteStudent