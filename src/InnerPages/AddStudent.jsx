import React, { useState } from 'react'
import innerpageStyles from './innerStyles.module.css'
import axios from 'axios';
const AddStudent = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address:""
  })

  const changeHandler = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

  const addStudentData = (e) => {
    e.preventDefault(); 
    axios.post(`https://backend4pmjuly26.onrender.com/student`, data)
      .then(res => {
        alert(res.data.message);
        setData({
          name: "",
          email: "",
          phone: "",
          address:""
        })
      })
      .catch(err => {
        alert(res.data.message)
      })    
  }
  return (
     <main>
              <section className={innerpageStyles.bread}>
                  <div className="container">
                     <div className="row">
                          <div className="col-md-12">
                            <h1>Add Student</h1>          
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
                    <input type='text' name='name' value={data.name} onChange={changeHandler} placeholder='Name' className='form-control' />
                  </div>
                  <div className='mb-4'>
                    <input type='email' name='email' value={data.email} onChange={changeHandler}  placeholder='Email' className='form-control' />
                  </div>
                  <div className='mb-4'>
                    <input type='text' name='phone' value={data.phone} onChange={changeHandler}  placeholder='Phone' className='form-control' />
                  </div>
                  <div className='mb-4'>
                    <input type='text' name='address' value={data.address} onChange={changeHandler}  placeholder='Address' className='form-control' />
                  </div>
                  <div className='mb-2'>
                    <input type='button' value="Add Student" className='btn btn-success' onClick={addStudentData} />
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

export default AddStudent