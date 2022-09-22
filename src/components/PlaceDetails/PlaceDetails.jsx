import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  //<Rating size="small" value={Number(place.rating)} readOnly />
  if (!place) return "Loading ..."; // just a test code

  return (
    <Card elevation={6}>
      <CardMedia style={{ height: 350 }} image={place.photo ? place.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} title={place.name} />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>

        {place?.awards?.map(
          (
            award // searches an award if the restaurant has one...
          ) => (
            <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="textSecondary">
                {award.display_name}
              </Typography>
            </Box> // for each award shows a box
          )
        )}

        {place?.cuisine?.map(
          (
            { name } // the name was destructured from cuisine
          ) => (
            <Chip key={name} size="small" label={name} className={classes.chip} />
          )
        )}

        {place?.address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web_url, "_blank")}>
            Trip Advisor
          </Button>

          <Button size="small" color="primary" onClick={() => window.open(place.website, "_blank")}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;

/*

import React from 'react'

const PlaceDetails = ({ place }) => {
  return (
    <h1>{place.name}</h1> // takes the name from the console, can view different name etc by console logging place
  )
}

export default PlaceDetails

*/
