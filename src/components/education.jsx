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
            <Grid item xs={6}>
              <TextField
                label="School"
                key="school"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, id, "school")}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Degree"
                key="degree"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, id, "degree")}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                key="city"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, id, "city")}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                label="Start Date"
                key="startDate"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, id, "startDate")}
                slotProps={{ textField: { size: "small" } }}
              ></DatePicker>
              <Grid item xs={6}>
                <DatePicker
                  label="End Date"
                  key="endDate"
                  variant="outlined"
                  size="small"
                  onChange={(e) => handleChange(e, id, "endDate")}
                  slotProps={{ textField: { size: "small" } }}
                ></DatePicker>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
