import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useState } from "react";
import CV from "./cv";
import personalInfoSample from "../data/personalInfoSample";
import PersonalDetails from "./personalInfo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Education from "./education";

export default function MainGrid() {
  let [personalInfo, setPersonalInfo] = useState({ personalInfoSample });
  let [education, setEducation] = useState(1);

  function handleChange(e, info) {
    const value = e.target.value;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [info]: value,
    }));
  }

  function handleAddEducation() {
    setEducation(education + 1);
  }

  return (
    <>
      <Grid
        container
        padding={"2rem"}
        spacing={3}
        height={"100vh"}
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        <Grid item xs={6} padding={"3rem"}>
          <h2>Fill in Details Below</h2>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Personal Details
            </AccordionSummary>
            <AccordionDetails>
              <PersonalDetails handleChange={handleChange}></PersonalDetails>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Education
            </AccordionSummary>
            <AccordionDetails>
              {Array.from({ length: education }).map((_, index) => (
                <Education
                  key={index} // Adding a unique key prop is necessary when rendering arrays of components
                  handleChange={handleChange}
                />
              ))}

              <Container
                sx={{
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <AddRoundedIcon onClick={handleAddEducation}></AddRoundedIcon>
              </Container>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Work Experience
            </AccordionSummary>
            <AccordionDetails>
              <div>Leel</div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <CV personalInfo={personalInfo}></CV>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
