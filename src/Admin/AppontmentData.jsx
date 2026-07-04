import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import DataTable from 'datatables.net-dt/js/dataTables.dataTables.min';
  import $ from 'jquery';
const AppontmentData = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
    axios.get(`https://backend4pmjuly26.onrender.com/appointments`)
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
  
   return (
    <section>
              <div className="container">
                 <div className="row">
                      <div className="col-md-12 table-responsive">
              <table className='table table-bordered display' id='myTable'>
                <thead>
                  <tr>                    
                    <th>T.Name</th>
                   <th>D.Name</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Phone</th>
                   <th>Subject</th>
                   <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((trea) => {
                      return (
                        <tr key={trea._id}>
                         
                          <td>{trea.tname}</td>
                          <td>{trea.dname}</td>
                          <td>{trea.name}</td>
                          <td>{trea.email}</td>
                          <td>{trea.phone}</td>
                          <td>{trea.subject}</td>
                          <td>{trea.message}</td>
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

export default AppontmentData