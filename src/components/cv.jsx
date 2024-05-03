import { Container } from "@mui/material"

export default function CV ({ personalInfo }) {
    
    return (
        <Container
            sx={{ p: 2, border: '1px dashed grey'}}
        >
            <div>{personalInfo.firstName}</div>
            <div>{personalInfo.lastName}</div>
            <div>{personalInfo.street}</div>
        </Container>
    )
}