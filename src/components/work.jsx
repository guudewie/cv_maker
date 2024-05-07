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

export default function Work({
  id,
  handleChange,
  handleExpand,
  handleDelete,
  workObject,
  expanded,
}) {
  return (
    <Container className="workSection">
      <Accordion expanded={expanded} onChange={() => handleExpand(id)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {workObject.company ? workObject.company : "Your work experience"}
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                label="Company"
                key="company"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, id, "company")}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Position"
                key="position"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, id, "position")}
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
