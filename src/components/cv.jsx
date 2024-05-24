import { Divider } from "@mui/material";
import dayjs from "dayjs";

export default function CV({ personalInfo, education, work }) {
  const address =
    personalInfo.street +
    " " +
    personalInfo.number +
    (personalInfo.postCode || personalInfo.city
      ? ", " + personalInfo.postCode + " " + personalInfo.city
      : "");

  const fullName = personalInfo.firstName + " " + personalInfo.lastName;

  function formatDate(date) {
    return dayjs(date).format("MMM YYYY");
  }

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
          {education.length > 0 && (
            <Divider textAlign="left">
              <b>Education</b>
            </Divider>
          )}
          {education &&
            education.map((education) => {
              return (
                <>
                  <div className="cv-item">
                    <div className="cv-item-top">
                      <div className="cv-item-name">{education.school}</div>
                      <div className="cv-item-city">{education.city}</div>
                    </div>
                    <div className="cv-item-bottom">
                      <div className="cv-item-title">{education.degree}</div>
                      <div className="cv-item-dates">
                        {formatDate(education.startDate) +
                          " – " +
                          formatDate(education.endDate)}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="cv-work">
          {work.length > 0 && (
            <Divider textAlign="left">
              <b>Work Experience</b>
            </Divider>
          )}
          {work &&
            work.map((work) => {
              return (
                <>
                  <div className="cv-item">
                    <div className="cv-item-top">
                      <div className="cv-item-name">{work.company}</div>
                      <div className="cv-item-city">{work.city}</div>
                    </div>
                    <div className="cv-item-bottom">
                      <div className="cv-item-title">{work.position}</div>
                      <div className="cv-item-dates">
                        {formatDate(work.startDate) +
                          " – " +
                          formatDate(work.endDate)}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
