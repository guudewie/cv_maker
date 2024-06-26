import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useState } from "react";
import CV from "./cv";
import PersonalDetails from "./personalInfo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ClearIcon from "@mui/icons-material/Clear";
import SyncIcon from "@mui/icons-material/Sync";
import Education from "./education";
import Work from "./work";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import educationData from "../data/educationData";
import personalDetailsSampleObject from "../data/personalInfoData";
import workData from "../data/workData";

const personalDetailsObject = {
  firstName: "",
  lastName: "",
  street: "",
  number: "",
  postCode: "",
  city: "",
  email: "",
};

export default function MainGrid() {
  let [personalInfo, setPersonalInfo] = useState(personalDetailsObject);
  let [education, setEducation] = useState([]);
  let [work, setWork] = useState([]);
  let [activeEduKey, setActiveEduKey] = useState();
  let [activeWorkKey, setActiveWorkKey] = useState();

  function handleLoadData() {
    setPersonalInfo(personalDetailsSampleObject);
    setWork([workData.sample1, workData.sample2]);
    setEducation([educationData.sample1, educationData.sample2]);
  }

  function handleClearData() {
    setPersonalInfo(personalDetailsObject);
    setEducation([]);
    setWork([]);
  }

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
    let value;
    //access date if incoming target is a date picker, take value if otherwise
    if (e.$d) value = moment(e.$d).format("MMM YYYY");
    else value = e.target.value;
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
    let value;
    //access date if incoming target is a date picker, take value if otherwise
    if (e.$d) value = moment(e.$d).format("MMM YYYY");
    else value = e.target.value;
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
        display={"flex"}
        padding={"2rem"}
        spacing={3}
        height={"90vh"}
      >
        <Grid item xs="6" padding={"3rem"} overflow={"scroll"} height={"100vh"}>
          <div className="main-header">
            <div className="main-header-text">
              <h2>Fill in Details Below</h2>
            </div>
            <div className="main-header-buttons">
              <Button
                startIcon={<ClearIcon />}
                color="error"
                onClick={handleClearData}
              >
                Clear Content
              </Button>
              <Button
                startIcon={<SyncIcon />}
                color="success"
                onClick={handleLoadData}
              >
                Load Content
              </Button>
            </div>
          </div>
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
        <Grid item xs={6} style={{ display: "flex" }}>
          <div style={{ flex: "1", aspectRatio: "1 / 1.41", height: "90vh" }}>
            <Paper elevation={3} style={{ height: "100%" }}>
              <CV
                className="cv-comp"
                personalInfo={personalInfo}
                education={education}
                work={work}
                key={uuidv4()}
              />
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
