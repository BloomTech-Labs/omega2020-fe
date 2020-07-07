## SudokuGame

> Documantation

---

`const [win, setWin] = useState("");` Stores solution string

`gameBoardState` Stores:

- `boardState: ''` String of formated board values
- `puzzleId: ''` Puzzle Id from DS and passed thru BE
- `history : []` he history of current game play
- `conflicts : new Set([])` Array of conflicting values across field cells, rows and columns

> In ConstrustPuzzle.js `Line 48` puzzle.sudoku was chaged to puzzles to return all the puzzles. On `Line 53` puzzles was changed to puzzle.sudoku
