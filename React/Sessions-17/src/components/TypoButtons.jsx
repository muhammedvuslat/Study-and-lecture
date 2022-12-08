import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          mt={4}
          color="primary"
        >
          MUI Typograpy
        </Typography>
        <Typography
          variant="body1"
          align="justify"
          mt={4}
          color="secondary"
          sx={{ background: "brown", color: "white" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          doloribus inventore autem alias velit hic, quas quo laborum voluptatum
          amet.
        </Typography>

        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          deleniti accusantium, ullam corrupti ratione placeat optio ab ad
          suscipit nulla animi nihil quia eaque asperiores nesciunt officiis in
          perferendis dicta eos ut eligendi molestiae sunt pariatur quo. Beata
          voluptate possimus sint nobis blanditiis! Labore praesentium optio
          odit sit, dolor eius?
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
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
          <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} color="success">
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
