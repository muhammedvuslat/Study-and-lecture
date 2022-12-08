import AppBarComp from "../components/AppBarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#bfd706",
        light: "#d84315",
        dark: "#cf5732",
      },
      secondary: {
        main: teal[500],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBarComp />
        <TypoButtons />
        <TextFieldComp />
        <CardGrid />
      </ThemeProvider>
    </>
  );
};

export default Home;
