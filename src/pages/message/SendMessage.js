import React from "react";
import {
  Grid,
  Paper,
  TextField,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 20,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
  },
  divFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "2rem",
    marginTop: 20,
  },
  cancel: {
    textDecoration: "none",
    color: "#c4c4c4",
  },
  button: {
    backgroundColor: "#5cb85c ",
    color: "white",
  },
}));
export default function SendMessage() {
  var classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container={3} spacing={3}>
        <Grid item xs={12}>
          <Typography variant="body1">Category User</Typography>
          <TextField variant="outlined" className={classes.input} fullWidth />
          <Typography variant="body1">Image</Typography>
          <TextField
            variant="outlined"
            className={classes.input}
            fullWidth
            type="file"
          />
          <Typography variant="body1">Body message</Typography>
          <TextField
            variant="outlined"
            className={classes.input}
            multiline
            rows="10"
            fullWidth
          />
          <Typography variant="body1">Date</Typography>
          <TextField
            variant="outlined"
            className={classes.input}
            fullWidth
            type="date"
          />
          <Typography variant="body1">Time</Typography>
          <TextField
            variant="outlined"
            className={classes.input}
            fullWidth
            type="time"
          />
          <div className={classes.divFlex}>
            <Link to="/app/message" className={classes.cancel}>
              Cancel
            </Link>
            <Button
              variant="contained"
              className={classes.button}
              size="medium"
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
