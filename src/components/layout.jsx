import { Grid, Container, TextField } from '@mui/material';
import { useState } from 'react';
import CV from './cv';
import personalInfoSample from '../data/personalInfoSample';

export default function MainGrid () {
    let [ personalInfo, setPersonalInfo ] = useState({ personalInfoSample })

    function handleChange(e, info) {
        const value = e.target.value
        setPersonalInfo(prevState => ({
            ...prevState,
            [info] : value
        }))
    }
    
    return (
        <>
            <Grid container spacing={2} height={"100vh"}>
                <Grid item xs={6}>
                    <Container>
                        <h2>Details</h2>
                        <Container className='personalDetails'>
                            <TextField 
                                label="First Name"
                                key="firstName"
                                variant='outlined'
                                size="small"
                                onChange={(e) => handleChange(e, "firstName")}
                            ></TextField>
                            <TextField 
                                label="Last Name"
                                key="firstName"
                                variant='outlined'
                                size="small"
                                onChange={(e) => handleChange(e, "lastName")}
                            ></TextField>
                            <TextField 
                                label="Street"
                                key="firstName"
                                variant='outlined'
                                size="small"
                                onChange={(e) => handleChange(e, "street")}
                            ></TextField>
                        </Container>
                    </Container>
                </Grid>
                <Grid item xs={6}>
                    <Container>
                        <h2>Curriculum Vitea</h2>
                        <CV
                            personalInfo={personalInfo}
                        ></CV>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}