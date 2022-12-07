import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";

const TextFieldComp = () => {
  return (
    <div>
      <Container>
        <Typography variant="h4" color="error" align="center" mt={4}>
          Text Field
        </Typography>
        <Box>
          <TextField />
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;