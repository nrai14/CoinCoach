// Home / About / Contact
// Three Buttons

import Stack from "@mui/system/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined">Home</Button>
      <Button variant="outlined">About</Button>
      <Button variant="outlined">Contact</Button>
    </Stack>
  );
}
