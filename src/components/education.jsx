import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker } from "@mui/x-date-pickers";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";

export default function Education({
  id,
  handleChange,
  handleExpand,
  handleDelete,
  educationObject,
  expanded,
}) {
  return (
    <Container className="personalDetails">
      <Accordion expanded={expanded} onChange={() => handleExpand(id)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {educationObject.school ? educationObject.school : "Educational Step"}
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                label="School"
                key="school"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, id, "school")}
                value={educationObject.school}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Degree"
                key="degree"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, id, "degree")}
                value={educationObject.degree}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="City"
                key="city"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, id, "city")}
                value={educationObject.city}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Start Date"
                key="startDate"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, id, "startDate")}
                slotProps={{ textField: { size: "small" } }}
                views={["month", "year"]}
                value={moment(educationObject.startDate)}
              ></DatePicker>
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                sx={{ width: "100%" }}
                label="End Date"
                key="endDate"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, id, "endDate")}
                slotProps={{ textField: { size: "small" } }}
                views={["month", "year"]}
                value={moment(educationObject.endDate)}
              ></DatePicker>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(id)}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
