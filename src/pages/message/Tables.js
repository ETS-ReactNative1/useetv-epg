import React from "react";
import { Button, Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";

// data

const datatableData = [
  ["Joe James", "20", "Yonkers", "NY", "21/05/2021", "09:24"],
  ["John Walsh", "20", "Hartford", "CT", "21/05/2021", "09:24"],
  ["Bob Herm", "20", "Tampa", "FL", "21/05/2021", "09:24"],
  ["James Houston", "20", "Dallas", "TX", "21/05/2021", "09:24"],
  ["Prabhakar Linwood", "20", "Hartford", "CT", "21/05/2021", "09:24"],
  ["Kaui Ignace", "20", "Yonkers", "NY", "21/05/2021", "09:24"],
  ["Esperanza Susanne", "20", "Hartford", "CT", "21/05/2021", "09:24"],
  ["Christian Birgitte", "20", "Tampa", "FL", "21/05/2021", "09:24"],
  ["Meral Elias", "20", "Hartford", "CT", "21/05/2021", "09:24"],
  ["Deep Pau", "20", "Yonkers", "NY", "21/05/2021", "09:24"],
  ["Sebastiana Hani", "20", "Dallas", "TX", "21/05/2021", "09:24"],
  ["Marciano Oihana", "20", "Yonkers", "NY", "21/05/2021", "09:24"],
  ["Brigid Ankur", "20", "Dallas", "TX", "21/05/2021", "09:24"],
  ["Anna Siranush", "20", "Yonkers", "NY", "21/05/2021", "09:24"],
  ["Avram Sylva", "20", "Hartford", "CT", "21/05/2021", "09:24"],
  ["Serafima Babatunde", "20", "Tampa", "FL", "21/05/2021", "09:24"],
  ["Gaston Festus", "20", "Tampa", "FL", "21/05/2021", "09:24"],
];

export default function Tables() {
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
            title="Message Blast History List"
            data={datatableData}
            columns={[
              "Category User",
              "Total User",
              "Body Message",
              "Status",
              "Send Date",
              "Send Time",
            ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
