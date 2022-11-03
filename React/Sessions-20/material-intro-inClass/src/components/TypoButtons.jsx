import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <div>
          <Typography
            variant="h4"
            component="h6"
            align="center"
            mt={4}
            color="error"
          >
            MUI Typography
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            mt={4}
            color="primary"
            sx={{
              backgroundColor: "lightgreen",
              color: "#eee",
              fontSize: "1.1rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam
            laboriosam tempora saepe, eum deleniti eligendi maxime sit delectus
            perspiciatis?
          </Typography>
        </div>
        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          optio suscipit quos impedit voluptatibus voluptatum unde, pariatur
          fugit recusandae repudiandae quidem aspernatur excepturi at ratione
          quam, ut quisquam magnam voluptatem!
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
