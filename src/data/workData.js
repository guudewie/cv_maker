import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const sample1 = {
  key: uuidv4(),
  company: "Green Junktion Group",
  position: "Intern",
  city: "Boston, MA",
  startDate: dayjs(),
  endDate: dayjs(),
};

const sample2 = {
  key: uuidv4(),
  company: "Black Mesa Labs",
  position: "Associate Manager",
  city: "New York, NY",
  startDate: dayjs(),
  endDate: dayjs(),
};

export default { sample1, sample2 };
