import React, { useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { useQuery } from "react-query";
// components
import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";

// data

export default function Tables() {
  const { isLoading, data, refetch } = useQuery("repoData", () =>
    fetch("http://45.32.115.167:9091/notifications").then((res) => res.json()),
  );
  useEffect(() => {
    refetch();
  }, [data]);
  if (isLoading) return "Loading...";

  const truncate = (text, textLength) => {
    if (text && text.length > textLength) {
      return text && text.substring(0, textLength) + "...";
    }
    return text && text;
  };
  const columns = [
    {
      name: "userCategory",
      label: "Category user",
    },
    {
      name: "totalUser",
      label: "Total user",
    },
    {
      name: "bodyMessage",
      label: "Body message",
      options: {
        customBodyRender: (value) => truncate(value, 100),
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        customBodyRender: (value) => (
          <Typography
            variant="body1"
            style={{
              textTransform: "lowercase",
              color: value === "PENDING" ? "red" : "green",
            }}
          >
            {value}
          </Typography>
        ),
      },
    },
  ];
  return (
    <>
      <PageTitle
        title="Message"
        button={
          <Button
            component={Link}
            to="/app/send"
            color="secondary"
            variant="contained"
          >
            Send Message
          </Button>
        }
      />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            data={data}
            columns={columns}
            options={{
              selectableRows: false, // <===== will turn off checkboxes in rows
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
