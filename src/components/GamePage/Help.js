import React, { useContext } from "react";
import { GridContext } from "../../store/contexts/GridContext";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const HelpModal = () => {
  const { gridState, setGridState } = useContext(GridContext);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant={"h4"}>How to Play</Typography>
      <br />
      <br />
      <Typography variant={"h6"} className={classes.title}>
        Goal:
      </Typography>
      <Typography varient={"subtitle1"}>
        The goal is to fill all the empty cells on the board with the correct
        number.
      </Typography>
      <Typography variant={"h6"} className={classes.title}>
        Rules:
      </Typography>
      <Typography varient={"subtitle1"}>
        Fill the grid with the keypad so that every row, column and{" "}
        {gridState.row}×{gridState.col} box contains the digits 1 to{" "}
        {gridState.gridlength}, without repeating.
      </Typography>
      <Typography variant={"h6"} className={classes.title}>
        Hoe to play:
      </Typography>
      <Typography varient={"subtitle1"}>
        Click a cell to select it. Then click on a number from the keypad on the
        right to set the number for the selected cell or type it in directly
        using your keyboard. Use Normal Mode to enter numbers you are confident
        about. Use Notes Mode to add or remove multiple possibilities for a
        square.
      </Typography>
      <br />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  title: {
    color: grey[500],
  },
}));

export default HelpModal;
