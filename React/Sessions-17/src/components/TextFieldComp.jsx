import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TextFieldComp = () => {
  const [error, setError] = useState(false);
  return (
    <div>
      <Container>
        <Typography variant="h4" color="error" align="center" mt={4}>
          Text Field
        </Typography>
        <Box sx={{ mt: 4 }}>
          <TextField
            // margin="dense" margin="normal" gibi  MUI nun özel marginide kullanılabilinir
            id="email"
            label="Email"
            pleaceholde="Enter your email"
            fullWidth
            error={error}
            helperText={error && "Incorrect email format"}
          />

          <TextField
            id="password"
            label="Password"
            pleaceholde="Enter your password"
            fullWidth
            error={error}
            helperText={error && "Incorrect  password"}
            sx={{ mt: 2 }}
          />
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
