import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Education(handleChange, educationObject) {
  let education = educationObject;
  return (
    <Container className="personalDetails">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Personal Details
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid fullWidth item xs={6}>
              <TextField
                label="First Name"
                key="firstName"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, "firstName")}
              ></TextField>
            </Grid>
            <Grid fullWidth item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                key="lastName"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, "lastName")}
              ></TextField>
            </Grid>
            <Grid fullWidth item xs={8}>
              <TextField
                fullWidth
                label="Street"
                key="street"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, "street")}
              ></TextField>
            </Grid>
            <Grid fullWidth item xs={4}>
              <TextField
                label="Number"
                key="number"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) => handleChange(e, "number")}
              ></TextField>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
