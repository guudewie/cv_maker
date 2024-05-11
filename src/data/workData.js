import { v4 as uuidv4 } from "uuid";

const sample1 = {
  key: uuidv4(),
  company: "Green Junktion Group",
  position: "Intern",
  city: "Boston, MA",
  startDate: "Jan 2024",
  endDate: "Jun 2024",
};

const sample2 = {
  key: uuidv4(),
  company: "Black Mesa Labs",
  position: "Associate Manager",
  city: "New York, NY",
  startDate: "Aug 2024",
  endDate: "jan 2025",
};

export default { sample1, sample2 };
