import { Divider } from "@mui/material";

export default function CV({ personalInfo, education, work }) {
  const address =
    personalInfo.street +
    " " +
    personalInfo.number +
    (personalInfo.postCode || personalInfo.city
      ? ", " + personalInfo.postCode + " " + personalInfo.city
      : "");
  const fullName = personalInfo.firstName + " " + personalInfo.lastName;
  return (
    <div className="cv-container-main">
      <div className="cv-header">
        <h2 className="cv-title">{fullName}</h2>
        <div className="cv-personal-info">
          <div className="cv-address">{address}</div>
          <div className="cv-email">{personalInfo.email}</div>
        </div>
      </div>
      <div className="cv-main">
        <div className="cv-education">
          <Divider textAlign="left">Education</Divider>
          <div className="cv-education-item"></div>
        </div>
        <div className="cv-work">
          <Divider textAlign="left">Work Experience</Divider>
        </div>
      </div>
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
    </div>
  );
}
