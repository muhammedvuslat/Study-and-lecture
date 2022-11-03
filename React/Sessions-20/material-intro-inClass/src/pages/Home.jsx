import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import AppbarComp from "../components/AppbarComp";
import { createTheme, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#21a415",
      },
      secondary: {
        main: teal[200],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppbarComp />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
    </ThemeProvider>
  );
};

export default Home;
