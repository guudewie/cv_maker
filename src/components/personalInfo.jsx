import { Container, Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import "../style/index.css";

export default function PersonalDetails({ handleChange }) {
  return (
    <Container className="personalDetails">
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            key="firstName"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "firstName")}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            key="lastName"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "lastName")}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Street"
            key="street"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "street")}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Number"
            key="number"
            type="number"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "number")}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="City"
            key="city"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "city")}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Post Code"
            key="postCode"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "postCode")}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            label="Birthday"
            key="birthdate"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "birthDate")}
            slotProps={{ textField: { size: "small" } }}
          ></DatePicker>
        </Grid>
      </Grid>
    </Container>
  );
}
