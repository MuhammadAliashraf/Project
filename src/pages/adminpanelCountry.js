import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Muidropdown from '../component/dropdown';
import { getDataFromDataBase, sendDataToDataBase } from '../config/firebasemethod';

function AdminpanelCountry() {
    const [model, setmodel] = useState();
    const [country, setcountry] = useState([]);
    const [loading, setloading] = useState(false);
    // send data To data Base only
    let InfoGo = () => {
        setloading(true)
        console.log(model)
        sendDataToDataBase(
            model,
            `Countries/`)
            .then((userID) => {
                setloading(false)
                console.log(userID);
                alert("Data Added!Refresh Page to See Data")
            })
            .catch((error) => {
                setloading(false)
                console.log(error)
            });
    }
    const getCountryData = () => {
        setloading(true)
        getDataFromDataBase(`Countries/`)
            .then((res) => {
                setcountry(res.map(e => e))
                setloading(false)
                // console.log(res)
            })
            .catch((error) => {
                alert(error)
                setloading(false)
            })
    }

    useEffect(() => {
        getCountryData();
    }, [])


    return (
        <div>
            {loading ? (<Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}>
                <CircularProgress />
            </Box>) :
                <>
                    <h1>Country</h1><Grid container spacing={2}>
                        <Grid item md={2}>
                            <TextField
                                fullWidth
                                required
                                label="Country Name"
                                onChange={(e) => setmodel({ ...model, countryName: e.target.value })} />
                        </Grid>
                        <Grid item md={2}>
                            <TextField
                                fullWidth
                                required
                                label="Country Code"
                                onChange={(e) => setmodel({ ...model, countryCode: e.target.value })} />
                        </Grid>
                        <Grid item md={2}>
                            <TextField
                                fullWidth
                                required
                                label="Country Money"
                                onChange={(e) => setmodel({ ...model, countryMoney: e.target.value })} />
                        </Grid>
                    <Grid item md={2}>
                            <Button variant='contained' onClick={InfoGo}>{loading ? <CircularProgress/> :"Send"}</Button>
                        </Grid>
                    </Grid><table className="table table-bordered w-90 mt-2" style={{ fontSize: '0.8rem' }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th>Country Name</th>
                                <th>Country Code</th>
                                <th>Currency</th>

                            </tr>
                        </thead>
                        <tbody>
                            {country.map((e, i) => {
                                return <tr key={i}>
                                    <td scope='row'>{i}</td>
                                    <td>{e.countryName}</td>
                                    <td>{e.countryCode}</td>
                                    <td>{e.countryMoney}</td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </>
            }
        </div>
    )
}

export default AdminpanelCountry
