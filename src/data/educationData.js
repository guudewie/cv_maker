import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

const sample1 = {
  key: uuidv4(),
  school: "Karakorum University",
  degree: "Middle East Studies",
  city: "Islamabad, PA",
  startDate: dayjs(),
  endDate: dayjs(),
};

const sample2 = {
  key: uuidv4(),
  school: "Berlin School of Design",
  degree: "UI/UX Design",
  city: "Berlin, DE",
  startDate: dayjs(),
  endDate: dayjs(),
};

export default { sample1, sample2 };
