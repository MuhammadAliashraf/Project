import { CircularProgress, Grid, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getDataFromDataBase } from '../config/firebasemethod'
import Dashboard from './Dashboard'
import SMGrid from '../component/grid'
function Adminpanelcourselist() {

    const [isLoading, setLoading] = useState(true)
    const [course, setcourse] = useState([])
    console.log(course)
    const getStudentData = () => {
        getDataFromDataBase(`Coursedetails/`)
            .then((res) => {
                setcourse(res)
                setLoading(false)
            })
            .catch((error) => {
                alert(error)
                setLoading(false)
            })
    }
    useEffect(() => {
        getStudentData();
    }, [])

    return (
        <div className='mx-4'>
            {isLoading ?
                (<Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh'
                }}>
                    <CircularProgress />
                </Box>) : (
                    <>
                        <Typography variant="p" className="display-3">Current Courses</Typography>

                        <SMGrid
                            datasource={course}
                            onRowClick={(e) => console.log(e)}
                            Cols={[
                                {
                                    displayName: "Course Name",
                                    key: "CourseName"

                                },
                                {
                                    displayName: "Course Fees",
                                    key: "Fees"

                                },
                                {
                                    displayName: "Course Duration",
                                    key: "CourseDuration"

                                },
                                {
                                    displayName: "Lead Trainers",
                                    key: "LeadTrainers"

                                },
                                {
                                    displayName: "Assitant Trainers",
                                    key: "AssitantTrainers"

                                },
                                {
                                    displayName: "Quizes",
                                    key: "Quizes"

                                },
                            ]}
                        />

                    </>
                )
            }
        </div>
    )
}

export default Adminpanelcourselist
