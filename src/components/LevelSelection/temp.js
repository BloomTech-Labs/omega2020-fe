import React, { useContext } from "react";
import { GridContext } from "../../store/contexts/GridContext";
import { WinContext } from "../../store/contexts/WinContext";
import { PuzzleContext } from "../../store/contexts/PuzzleContext";
import { makeStyles, Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import WhiteButton from "../assets/WhiteButton";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Get4x4 } from "../SudokuGame/puzzle-handler/grid-axios-call/4x4";
import { Get6x6 } from "../SudokuGame/puzzle-handler/grid-axios-call/6x6";
import { Get9x9 } from "../SudokuGame/puzzle-handler/grid-axios-call/9x9";
import { keysPuzzle } from "../SudokuGame/puzzle-handler/functions/keys";
import { formatPuzzle } from "../SudokuGame/puzzle-handler/functions/formatPuzzle";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 200,
  },
  mainContainer: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    fontSize: "2em",
    padding: "5%",
  },
  subheader: {
    // opacity: 0.3,
    color: "#A2A2A2",
  },
  levels: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    alignContent: "space-evenly",
    width: "100%",
  },
  section1: {
    display: "flex",
    flexFlow: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignContent: "space-between",
  },
  section2: {
    display: "flex",
    flexFlow: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignContent: "space-evenly",
  },
  mobHeader: {
    fontSize: "1.3rem",
    padding: "5%",
  },
  mobLevels: {
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "space-evenly",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  mobGrid: {
    padding: "10%",
  },
  mobSection1: {
    display: "flex",
    flexFlow: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignContent: "space-between",
  },
  mobSection2: {
    display: "flex",
    flexFlow: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignContent: "space-evenly",
  },
  icon: {
    fontSize: 80,
    color: grey[700],
  },
  gameBoard: {
    marginTop: 200,
  },
  space: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const SelectionPage = () => {
  const { win, setWin } = useContext(WinContext);
  const { gridState, setGridState } = useContext(GridContext);
  const { puzzleState, setPuzzleState } = useContext(PuzzleContext);

  // setPuzzleState("9");
  // console.log(`puzzleState from levels: ${puzzleState}`);

  let grid = `${gridState.gridlength}x${gridState.gridlength}`;
  let level = gridState.level;

  const classes = useStyles();

  let viewPort = false;
  const md = useMediaQuery("(min-width: 1050px)");
  if (viewPort === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  const handleLevels = (value) => {
    async function getPuzzle4x4() {
      let puzzles = await Get4x4();
      setWin(puzzles.solution);
      return puzzles;
    }

    async function getPuzzle6x6() {
      let puzzles = await Get6x6();
      setWin(puzzles.solution);
      return puzzles;
    }

    async function getPuzzle9x9() {
      let puzzles = await Get9x9();
      setWin(puzzles.solution);
      return puzzles;
    }

    async function uploadPuzzle() {
      let puzzles = await gridState.solved.solution;
      setWin(puzzles.solution.solution);
      return puzzles.solution;
    }

    const getFormattedPuzzle = async () => {
      function getPuzzle() {
        switch (puzzleState) {
          case "4":
            const puzzle4x4 = getPuzzle4x4();
            return puzzle4x4;
            break;
          case "6":
            const puzzle6x6 = getPuzzle6x6();
            return puzzle6x6;
            break;
          case "9":
            const puzzle9x9 = getPuzzle9x9();
            return puzzle9x9;
            break;
          default:
            const puzzleDefault = getPuzzle9x9();
            return puzzleDefault;
            break;
        }
      }

      // const handleLevels = (value) => {
      //   async function getPuzzle4x4() {
      //     let puzzles = await Get4x4();
      //     setWin(puzzles.solution);
      //     return puzzles;
      //   }

      //   async function getPuzzle6x6() {
      //     let puzzles = await Get6x6();
      //     setWin(puzzles.solution);
      //     return puzzles;
      //   }

      //   async function getPuzzle9x9() {
      //     let puzzles = await Get9x9();
      //     setWin(puzzles.solution);
      //     return puzzles;
      //   }

      //   async function uploadPuzzle() {
      //     let puzzles = await gridState.solved.solution;
      //     setWin(puzzles.solution.solution);
      //     return puzzles.solution;
      //   }

      //   const getFormattedPuzzle = async () => {
      //     async function getPuzzle() {
      //       switch (puzzleState) {
      //         case "4":
      //           const puzzle4x4 = await getPuzzle4x4();
      //           return puzzle4x4;
      //           break;
      //         case "6":
      //           const puzzle6x6 = await getPuzzle6x6();
      //           return puzzle6x6;
      //           break;
      //         case "9":
      //           const puzzle9x9 = await getPuzzle9x9();
      //           return puzzle9x9;
      //           break;
      //         default:
      //           const puzzleDefault = await getPuzzle9x9();
      //           return puzzleDefault;
      //           break;
      //       }
      //     }

      // const puzzle = await getPuzzle9x9();
      const puzzle = await getPuzzle();
      let Length = puzzle.gridlength;
      const formattedPuzzle = formatPuzzle(puzzle.sudoku, Length);
      // key value rendering:
      const keyFunction = keysPuzzle(puzzle.sudoku, Length);

      console.log("Game Board State in formatted puzzle", gridState);
      console.log("Loaded puzzle in formatted puzzle", puzzle);
      console.log("formattedPuzzle  in formatted puzzle", formattedPuzzle);

      setGridState({
        ...gridState,
        boardState: formattedPuzzle,
        gridlength: puzzle.gridlength,
        row: puzzle.row,
        col: puzzle.col,
        puzzleId: puzzle.id,
        level: puzzle.level,
        solved: puzzle.solution,
        original: puzzle.sudoku,
      });
    };
    // let levels = setPuzzleState('value');
    // console.log(`levels value from levels: ${levels}`);
    // return levels;
    console.log("The puzzleState was ", puzzleState);
    setPuzzleState("9").then(
      console.log("The puzzleState now is ", puzzleState)
    );
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.mainContainer}>
        {(() => {
          switch (viewPort) {
            case true:
              return (
                <Box>
                  <Container className={classes.HeaderBox}>
                    <Typography
                      className={classes.mobHeader}
                      style={{ fontSize: "1.3rem" }}
                    >
                      Which game would you like to play?
                    </Typography>
                  </Container>
                  <Container className={classes.mobLevels}>
                    <Box className={classes.mobSection1}>
                      <Container className={classes.mobGrid}>
                        <img
                          src={require("../../images/4x4.png")}
                          alt="4x4 grid"
                        ></img>
                      </Container>
                      <Container className={classes.mobSection2}>
                        <Typography className={classes.mobHeader}>
                          4x4
                        </Typography>
                        <br />
                        <Typography>start off with something easy</Typography>
                        <br />
                        <WhiteButton title="Easy" href="/coming-soon" />
                        <br />
                        {/* <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                      <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                      <Container className={classes.mobGrid}>
                        <img
                          src={require("../../images/6x6.png")}
                          alt="6x6 grid"
                        ></img>
                      </Container>
                      <Container className={classes.mobSection2}>
                        <Typography className={classes.mobHeader}>
                          6x6
                        </Typography>
                        <br />
                        <Typography>let's kick it up a notch!</Typography>
                        <br />
                        <WhiteButton title="Easy" href="/coming-soon" />
                        <br />
                        {/* <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                        <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                      <Container className={classes.mobGrid}>
                        <img
                          src={require("../../images/9x9new.png")}
                          alt="9x9 grid"
                        ></img>
                      </Container>
                      <Container className={classes.mobSection2}>
                        <Typography className={classes.mobHeader}>
                          9x9
                          <br />
                        </Typography>
                        <Typography>Level up even further</Typography>
                        <br />
                        <WhiteButton
                          title="Easy"
                          // href={`/game`}
                          click={handleLevels}
                          // href={`/game/${grid}/${level}`}
                        />
                        {/* <Button href={`/game`} onClick={handleLevels}>
                          9x9 easy
                        </Button> */}
                        <br />
                        {/* <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                        <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                    </Box>
                  </Container>
                </Box>
              );
            default:
              return (
                <Box>
                  <Container className={classes.headerBox}>
                    <Typography className={classes.header}>
                      Which game would you like to play?
                    </Typography>
                  </Container>
                  <Container className={classes.levels}>
                    <Box className={classes.section1}>
                      <Container>
                        <img
                          src={require("../../images/4x4.png")}
                          alt="4x4 grid"
                        ></img>
                      </Container>
                      <Container>
                        <img
                          src={require("../../images/6x6.png")}
                          alt="6x6 grid"
                        ></img>
                      </Container>
                      <Container>
                        <img
                          src={require("../../images/9x9new.png")}
                          alt="9x9 grid"
                        ></img>
                      </Container>
                    </Box>
                    <Box className={classes.section1}>
                      <Container className={classes.section2}>
                        <Typography className={classes.header}>4x4</Typography>
                        <br />
                        <Typography>start off with something easy</Typography>
                        <br />
                        <WhiteButton title="Easy" href="/coming-soon" />
                        {/* <br />
                        <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                        <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                      <Container className={classes.section2}>
                        <Typography className={classes.header}>6x6</Typography>
                        <br />
                        <Typography>let's kick it up a notch!</Typography>
                        <br />
                        <WhiteButton title="Easy" href="/coming-soon" />
                        {/* <br />
                        <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                        <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                      <Container className={classes.section2}>
                        <Typography className={classes.header}>9x9</Typography>
                        <br />
                        <Typography>Level up even further</Typography>
                        <br />
                        <WhiteButton
                          title="Easy"
                          href={`/game`}
                          click={handleLevels}
                          // href={`/game/${grid}/${level}`}
                        />
                        {/* <br />
                        <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                        <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                    </Box>
                  </Container>
                </Box>
              );
          }
        })()}
      </Box>
    </Box>
  );
};
export default SelectionPage;
