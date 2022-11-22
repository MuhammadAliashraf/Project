import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Muidropdown from "../component/dropdown";
import SMGrid from "../component/grid";
import BasicSelect from "../component/select";


function AdminpanelCR() {
    const [data, setData] = useState({});
    const [loading, setloading] = useState(false);
    const [courseStatus, setCourseStatus] = useState(false);
    const [resultData, setResultData] = useState([
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC100",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC101",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC102",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC103",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC104",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC105",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC106",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC107",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC108",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC109",
            result: "Pass",
        },
    ]);
    // console.log(resultData)

    let fromsubmit = () => {
        data.isShowResult = courseStatus;
        data.result = resultData;
        console.log(data);
    };


    return (
        <>
        {loading? (<Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}>
          <CircularProgress />
        </Box>) : <Grid container justifyContent='center' minHeight="100vh">
                <Grid item xs={10} md={10}>
                    <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
                        <Grid item md={10}>
                            <Typography variant="p" className="display-3">Create Result</Typography>
                            <Grid container className='mt-2' alignItems='center' spacing={2}>
                                <Grid item xs={10} md={6}>
                                    <Muidropdown
                                        label='Course'
                                        labelId='course-float'
                                        name="course"
                                        onChange={(e) => setData({ ...data, course: e.target.value })}
                                        required={true}
                                        // error={error}
                                        dataSource={[
                                            {
                                                id: 'WM',
                                                option: 'Web & Mobile App Hybrid'
                                            },
                                            {
                                                id: 'MERN',
                                                option: 'MERN Stack Developer'
                                            },
                                            {
                                                id: 'DM',
                                                option: 'Digital Marketing'
                                            },
                                            
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={10} md={1}>
                                    <BasicSelect
                                        label='Course Status'
                                        onChange={(e) => setCourseStatus(e.value.checked)}
                                    />
                                </Grid>
                            </Grid>
                                <Grid item  md={2}>
                                    <Button variant="contained" onClick={fromsubmit}>Submit</Button>
                                </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Typography variant="p" className="display-3">Results List</Typography>
                                <SMGrid 
                                datasource={resultData}
                                onRowClick={(e)=>console.log(e)}      
                                Cols={[
                                        {
                                            displayName: "Name",
                                            key: "name"
        
                                        },
                                        {
                                            displayName: "Marks",
                                            key: "marks"
        
                                        },
                                        {
                                            displayName: "RollNum",
                                            key: "rollNum"
                                        },
                                        {
                                            displayName: "Result",
                                            key: "result"
                                        }
                                      ]}  
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid> 
            </Grid >
}
        </>
    )
}

export default AdminpanelCR;