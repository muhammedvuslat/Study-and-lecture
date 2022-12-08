import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import data from "../data";

const CardGrid = () => {
  return (
    <>
      {data.map((cards) => {
        const { id, name, text, img } = cards;
        return (
          <Card sx={{ maxWidth: 345, mt: 3 }}>
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
        );
      })}
    </>
  );
};

export default CardGrid;
