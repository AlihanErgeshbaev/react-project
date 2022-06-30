import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Backdrop
      sx={{ color: "gold", zIndex: theme => theme.zIndex.drawer + 1 }}
      open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;