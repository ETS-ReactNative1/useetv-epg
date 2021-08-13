import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";

import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import { useQuery } from "react-query";
export default function Tables() {
  const { isLoading, data, refetch } = useQuery("repoData", () =>
    fetch("http://157.230.47.142:9091/customer").then((res) => res.json()),
  );
  useEffect(() => {
    refetch();
  }, [data]);
  if (isLoading) return "Loading...";

  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "phone",
      label: "Phone Number",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "customerCategory",
      label: "Category user",
    },
  ];
  return (
    <>
      <PageTitle title="Users" />
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
