import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  makeStyles,
  Typography,
  Button,
  Chip,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 20,
  },
  paperPreview: {
    padding: 20,
    backgroundImage: `url(
      "https://1.bp.blogspot.com/-vnihMx5Kvq8/XOAwcL02yyI/AAAAAAAAZGA/KXI7fS-BhTIX-2Q1vf5YkfvPr_YrjCNFwCLcBGAs/s1600/1.jpg")`,
    height: "100%",
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
  img: {
    width: "100%",
    height: 300,
    objectFit: "cover",
  },
}));
export default function SendMessage() {
  var classes = useStyles();
  let history = useHistory();
  const [value, setValue] = useState({
    category: "BRONZE",
    image: null,
    message: "",
    date: new Date(),
    time: new Date(),
  });
  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };
  const handleFile = (e) => {
    const tempFile = Array.from(e.target.files);
    const formData = new FormData();
    formData.append("image", tempFile[0]);
    axios
      .post(`http://157.230.47.142:9091/file/upload-image`, formData)
      .then((res) => {
        setValue({ ...value, image: res.data });
      });
  };
  const handleSubmit = () => {
    const noImage = {
      phone: "0895346604342",
      message: value.message,
      image: value.image,
      caption: "string",
      date: "string",
      time: "string",
      secret: true,
      priority: true,
    };
    const withImage = {
      customerCategory: "BRONZE",
      caption: value.message,
      image: value.image,
    };
    axios
      .post(
        `http://157.230.47.142:9091/whatsapp/wablas/send-message-${
          value.image !== null ? "with" : "without"
        }-image`,
        value.image !== null ? withImage : noImage,
      )
      .then(() => {
        history.push("/app/message");
      });
  };
  return (
    <Grid container spacing={3}>
      <Grid item lg={8} md={8} sm={12} xl={8}>
        <Paper className={classes.paper}>
          <Typography variant="body1">Category User</Typography>
          <TextField
            variant="outlined"
            className={classes.input}
            fullWidth
            onChange={handleChange("category")}
            value={value.category}
            disabled
          />
          <Typography variant="body1">Image</Typography>
          {value.image !== null ? (
            <Chip
              label={value.image}
              onDelete={() => setValue({ ...value, image: null })}
              className={classes.chip}
            />
          ) : (
            <TextField
              variant="outlined"
              className={classes.input}
              fullWidth
              type="file"
              onChange={handleFile}
            />
          )}

          <Typography variant="body1">Body message</Typography>
          <TextField
            variant="outlined"
            className={classes.input}
            multiline
            rows="10"
            fullWidth
            onChange={handleChange("message")}
            value={value.message}
          />
          <Typography variant="body1">Date</Typography>
          <TextField
            variant="outlined"
            className={classes.input}
            fullWidth
            type="date"
            onChange={handleChange("date")}
            value={value.date}
          />
          <Typography variant="body1">Time</Typography>
          <TextField
            variant="outlined"
            className={classes.input}
            fullWidth
            type="time"
            onChange={handleChange("time")}
            value={value.time}
          />
          <div className={classes.divFlex}>
            <Link to="/app/message" className={classes.cancel}>
              Cancel
            </Link>
            <Button
              variant="contained"
              className={classes.button}
              size="medium"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xl={4}>
        <Paper className={classes.paperPreview}>
          {value.message.length > 0 || value.image !== null ? (
            <div className="box sb1">
              {value.image !== null ? (
                <img src={value.image} className={classes.img} />
              ) : null}
              <Typography variant="body2" component="p">
                {value.message}
              </Typography>
            </div>
          ) : null}
        </Paper>
      </Grid>
    </Grid>
  );
}
