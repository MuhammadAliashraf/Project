import { CircularProgress, Grid, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getDataFromDataBase } from '../config/firebasemethod'
function AdminpanelStu() {
  const [isLoading, setLoading] = useState(true)
  const [getData,setgetData]=useState()
  const getStudentData = () => {
    getDataFromDataBase(`student/`)
        .then((res) => {
            setgetData(res)
            setLoading(false)
        })
        .catch((error) => {
            alert(error)
        })
}
useEffect(() => {
    getStudentData();
    
}, [])
  return (
    <div className='mx-4'>
      {isLoading ? 
      ( <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'        
      }}>
        <CircularProgress/>
      </Box> ) : (
       <>
       <Typography variant="p" className="display-3">Student List</Typography>
        <table className="table table-bordered w-90 mt-2" style={{ fontSize: '0.8rem' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Courses</th>
              <th>Section</th>
              <th>Date Of Birth</th>
              <th>Contact</th>
              <th>CNIC</th>
              <th>Father Name</th>
              <th>Father CNIC</th>
              <th>Father Contact</th>
              <th>Emergency Contact</th>
              <th>User UID</th>
            </tr>
          </thead>
          {getData.map((e, i) => {
            return <tbody key={i}>
              <tr>
                <td scope='row'>{i}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.Course}</td>
                <td>{e.Section}</td>
                <td>{e.date}</td>
                <td>{e.contact}</td>
                <td>{e.cnic}</td>
                <td>{e.fatherName}</td>
                <td>{e.fatherCnic}</td>
                <td>{e.fatherContact}</td>
                <td>{e.emergencyContact}</td>
                <td>{e.id}</td>
              </tr>
            </tbody>
          })}
        </table>
       </>
        )
      }
    </div>
  )
}

export default AdminpanelStu
