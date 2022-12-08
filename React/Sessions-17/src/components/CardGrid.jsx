import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import data from "../data";
import Grid from "@mui/material/Grid";

const CardGrid = () => {
  return (
    <>
      <Typography variant="h4" color="error" align="center" mt={4}>
        Card & Grid
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {data.map((cards) => {
          const { id, name, text, img } = cards;
          return (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ mt: 3 }} key={id}>
                  <CardActionArea>
                    <CardMedia component="img" image={img} alt="img" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Detail
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default CardGrid;
