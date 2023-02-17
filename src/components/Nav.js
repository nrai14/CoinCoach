// Home / About / Contact
// Three Buttons

import Stack from "@mui/system/Stack";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <Button variant="outlined" component={Link} to="/">Home</Button>
      <Button variant="outlined" component={Link} to="/about">About</Button>
      <Button variant="outlined" component={Link} to="/contact">Contact</Button>
    </Stack>
  );
}
