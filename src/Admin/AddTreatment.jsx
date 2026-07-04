import React, { useState } from 'react'
import aminStyles from './adminStyles.module.css'
import axios from 'axios'
const AddTreatment = () => {
   const [data, setData] = useState({
              tname: "",
              tdesc:""
   })
  
   const changeHandler = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }
  
  const addTreatemnetData = (e) => {
    e.preventDefault(); 
    axios.post(`https://backend4pmjuly26.onrender.com/treatment`, data)
      .then(res => {
        alert(res.data.message);
        setData({
          tname: "",
          tdesc: ""
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
            <div className={`col-md-6 ${aminStyles.bx_shadow} ${aminStyles.bgnew1}`}>
            <form onSubmit={addTreatemnetData}>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='mb-4'>
                            <input type='text' name="tname" placeholder='T.Name' value={data.tname} onChange={changeHandler} className='form-control' />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='mb-4'>
                            <textarea name="tdesc" value={data.tdesc} onChange={changeHandler} placeholder='T.Desc' className='form-control' />
                        </div>
                      </div>                             
                
                    <div className='col-md-12'>
                        <div className='mb-4'>
                            <input type='submit' value="Add Treatment" className='btn btn-success' />
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

export default AddTreatment