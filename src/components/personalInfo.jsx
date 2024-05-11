import { Container, Grid, TextField } from "@mui/material";
import "../style/index.css";

export default function PersonalDetails({ handleChange, personalInfo }) {
  return (
    <Container className="personalDetails">
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "100%" }}
            label="First Name"
            key="firstName"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "firstName")}
            value={personalInfo.firstName}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "100%" }}
            label="Last Name"
            key="lastName"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "lastName")}
            value={personalInfo.lastName}
          ></TextField>
        </Grid>
        <Grid item xs={8}>
          <TextField
            sx={{ width: "100%" }}
            label="Street"
            key="street"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "street")}
            value={personalInfo.street}
          ></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            sx={{ width: "100%" }}
            label="Number"
            key="number"
            type="number"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "number")}
            value={personalInfo.number}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "100%" }}
            label="City"
            key="city"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "city")}
            value={personalInfo.city}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "100%" }}
            label="Post Code"
            key="postCode"
            variant="outlined"
            size="small"
            onChange={(e) => handleChange(e, "postCode")}
            value={personalInfo.postCode}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ width: "100%" }}
            label="Email"
            key="email"
            variant="outlined"
            size="small"
            type="email"
            onChange={(e) => handleChange(e, "email")}
            slotprops={{ textField: { size: "small" } }}
            value={personalInfo.email}
          ></TextField>
        </Grid>
      </Grid>
    </Container>
  );
}
