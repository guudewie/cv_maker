import { Grid, Container } from '@mui/material';

export default function MainGrid () {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Container>
                        <h2>Container Left</h2>
                    </Container>
                </Grid>
                <Grid item xs={6}>
                    <Container>
                        <h2>Container Right</h2>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}