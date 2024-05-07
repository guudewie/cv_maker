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
import personalInfoSample from "../data/personalInfoData";
import PersonalDetails from "./personalInfo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Education from "./education";
import { v4 as uuidv4 } from "uuid";

export default function MainGrid() {
  let [personalInfo, setPersonalInfo] = useState({ personalInfoSample });
  let [education, setEducation] = useState([]);
  let [activeEduKey, setActiveEduKey] = useState();

  function handleChange(e, info) {
    const value = e.target.value;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [info]: value,
    }));
  }

  function handleActiveEducation(id) {
    if (activeEduKey == id) setActiveEduKey(0);
    else setActiveEduKey(id);
  }

  function handleAddEducation() {
    let key = uuidv4();
    setEducation((prevEducation) => [
      ...prevEducation,
      {
        key: key,
        school: "",
        degree: "",
        city: "",
        startDate: "",
        endDate: "",
      },
    ]);
    handleActiveEducation(key);
  }

  function handleChangeEducation(e, key, info) {
    const value = e.target.value;
    setEducation((prevEducation) => {
      const updatedEducation = prevEducation.map((item) => {
        if (item.key == key) {
          return { ...item, [info]: value };
        }
        return item;
      });
      return updatedEducation;
    });
  }

  function handleDeleteEducation(id) {
    setEducation((prevEducation) => {
      return prevEducation.filter((education) => education.key !== id);
    });
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
              {education.length <= 0
                ? null
                : education.map((education) => (
                    <Education
                      key={education.key}
                      id={education.key}
                      handleChange={handleChangeEducation}
                      handleExpand={handleActiveEducation}
                      educationObject={education}
                      handleDelete={handleDeleteEducation}
                      expanded={activeEduKey === education.key}
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
            <CV personalInfo={personalInfo} education={education}></CV>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
