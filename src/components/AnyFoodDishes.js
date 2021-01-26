import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IconButton from "@material-ui/core/IconButton";
//import ReplayIcon from "@material-ui/icons/Replay";
import { anyFoodDishes } from "../constants/index";

const AnyFoodDishes = ({ getData }) => {
  const [query, setQuery] = useState();

  const getFoods = () => {
    const title = document
      .querySelector("#AnyFoodDishes")
      .value.toLowerCase()
      .trim();
    if (query !== title) {
      setQuery(title);
      getData(title);
    }
  };

  return (
    <Grid item xs={12} sm={6}>
      <Paper className="paper">
        <Autocomplete
          id="AnyFoodDishes"
          freeSolo
          options={anyFoodDishes.map((foodDish) => foodDish.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="food"
              margin="normal"
              variant="outlined"
            />
          )}
        />
        <IconButton onClick={() => getFoods()}>BUSCAR</IconButton>
      </Paper>
    </Grid>
  );
};

AnyFoodDishes.displayName = "AnyFoodDishes";

export default AnyFoodDishes;
