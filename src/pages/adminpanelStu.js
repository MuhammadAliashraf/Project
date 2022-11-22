import { CircularProgress, Grid, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SMGrid from '../component/grid'
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
        <SMGrid  
        datasource={getData}
        Cols={[
          {
            displayName:"First Name",
            key:"firstName"
          },
          {
            displayName:"Last Name",
            key:"lastName"
          },
          {
            displayName:"Course",
            key:"Course"
          },
          {
            displayName:"Section",
            key:"Section"
          },
          {
            displayName:"Date Of Birth",
            key:"date"
          },
          {
            displayName:"Phone Number",
            key:"contact"
          },
          {
            displayName:"CNIC Number",
            key:"cnic"
          },
          {
            displayName:"Father Name ",
            key:"fatherName"
          },
          {
            displayName:"Father Name ",
            key:"fatherName"
          },
          {
            displayName:"Father CNIC ",
            key:"fatherCnic"
          },
          {
            displayName:"Father Contact ",
            key:"fatherContact"
          },
          {
            displayName:"Emergency Contact ",
            key:"emergencyContact"
          },
          {
            displayName:"User ID ",
            key:"id"
          },
        ]}

        /> 
       </>
        )
      }
    </div>
  )
}

export default AdminpanelStu
