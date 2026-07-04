import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import DataTable from 'datatables.net-dt/js/dataTables.dataTables.min';
import $ from 'jquery';
const DeleteTreatment = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
    axios.get(`https://backend4pmjuly26.onrender.com/treatment`)
      .then(res => {
      setData(res.data.sdata);     
      })
      .catch(err => {
      console.log(err);      
      })
      
      $(function () {
        setTimeout(function () {
          new DataTable('#myTable');
        },1000); 
      })

    })
  
  const deleteTreatmentData = (tid) => { 
    const status = confirm("Are you sure you want to delete this treatment?");
    if (status) {
      axios.delete(`https://backend4pmjuly26.onrender.com/treatment/${tid}`)
        .then(res => {
          alert(res.data.message);
        })
        .catch(err => {
          console.log(err);
        })
    }
    else
    {
      alert(res.data.message);
    }
    
  }
  return (
    <section>
              <div className="container">
                 <div className="row">
                      <div className="col-md-12 table-responsive">
              <table className='table table-bordered display' id='myTable'>
                <thead>
                  <tr>                    
                    <th>T.Name</th>
                  <th>T.Desc</th>
                  <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((trea) => {
                      return (
                        <tr key={trea._id}>
                         
                          <td>{trea.tname}</td>
                          <td>{trea.tdesc}</td>
                           <td>
                            <button className='btn btn-danger' onClick={()=>deleteTreatmentData(trea._id)}>
                              <i class="fa-solid fa-trash"></i>
                            </button>
                          </td>
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
  )
}

export default DeleteTreatment