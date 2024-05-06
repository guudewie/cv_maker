import { Container } from "@mui/material";

export default function CV({ personalInfo, education }) {
  return (
    <Container sx={{ p: 2, border: "1px dashed grey" }}>
      <div>{personalInfo.firstName}</div>
      <div>{personalInfo.lastName}</div>
      <div>{personalInfo.street}</div>
      {education.length > 0
        ? education.map((education) => (
            <div key={education.key}>
              {education.school}
              {education.degree}
              {education.city}
              {education.startDate}
              {education.endDate}
            </div>
          ))
        : null}
    </Container>
  );
}
