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
import PersonalDetails from "./personalInfo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Education from "./education";
import Work from "./work";
import { v4 as uuidv4 } from "uuid";

const personalDetailsObject = {
  firstName: "",
  lastName: "",
  street: "",
  number: "",
  postCode: "",
  city: "",
  birthDate: "",
};

export default function MainGrid() {
  let [personalInfo, setPersonalInfo] = useState(personalDetailsObject);
  let [education, setEducation] = useState([]);
  let [work, setWork] = useState([]);
  let [activeEduKey, setActiveEduKey] = useState();
  let [activeWorkKey, setActiveWorkKey] = useState();

  function handleChange(e, info) {
    const value = e.target.value;
    console.log("layout state: ", personalInfo);
    setPersonalInfo((prevState) => ({
      ...prevState,
      [info]: value,
    }));
  }

  function handleActiveEducation(id) {
    if (activeEduKey == id) setActiveEduKey(0);
    else setActiveEduKey(id);
  }
  function handleActiveWork(id) {
    if (activeWorkKey == id) setActiveWorkKey(0);
    else setActiveWorkKey(id);
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

  function handleAddWork() {
    let key = uuidv4();
    setWork((prevWork) => [
      ...prevWork,
      {
        key: key,
        company: "",
        position: "",
        city: "",
        startDate: "",
        endDate: "",
      },
    ]);
    handleActiveWork(key);
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

  function handleChangeWork(e, key, info) {
    const value = e.target.value;
    setWork((prevWork) => {
      const updatedWork = prevWork.map((item) => {
        if (item.key == key) {
          return { ...item, [info]: value };
        }
        return item;
      });
      return updatedWork;
    });
  }

  function handleDeleteEducation(id) {
    setEducation((prevEducation) => {
      return prevEducation.filter((education) => education.key !== id);
    });
  }

  function handleDeleteWork(id) {
    setWork((prevWork) => {
      return prevWork.filter((work) => work.key !== id);
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
              <PersonalDetails
                handleChange={handleChange}
                personalInfo={personalInfo}
              ></PersonalDetails>
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
                  alignItems: "center",
                  gap: ".5rem",
                }}
                onClick={handleAddEducation}
              >
                <AddRoundedIcon />
                Add Education
              </Container>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Work Experience
            </AccordionSummary>
            <AccordionDetails>
              {work.length <= 0
                ? null
                : work.map((work) => (
                    <Work
                      key={work.key}
                      id={work.key}
                      handleChange={handleChangeWork}
                      handleExpand={handleActiveWork}
                      workObject={work}
                      handleDelete={handleDeleteWork}
                      expanded={activeWorkKey === work.key}
                    />
                  ))}
              <Container
                sx={{
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: ".5rem",
                }}
                onClick={handleAddWork}
              >
                <AddRoundedIcon />
                Add work
              </Container>
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
