import { v4 as uuidv4 } from "uuid";

const sample1 = {
  key: uuidv4(),
  school: "Karakorum University",
  degree: "Middle East Studies",
  city: "Islamabad, PA",
  startDate: "Sep 2019",
  endDate: "Jan 2023",
};

const sample2 = {
  key: uuidv4(),
  school: "Berlin School of Design",
  degree: "UI/UX Design",
  city: "Berlin, DE",
  startDate: "Okt 2022",
  endDate: "Jul 2024",
};

export default { sample1, sample2 };
