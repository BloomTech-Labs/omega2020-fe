# OMEGA2020 SUDOKU

Omega2020 Sudoku is a game that allows users to play and learn, as well as upload and save pictures of puzzles to complete using this game board.\
The statistics are available from the heading menu.\
The users can create an account or just play the games provided, without save and statistic options.

---

## Installation

Use the package manager Yarn to install Omega2020 Sudoku from inside the root folder.

```bash
yarn
```

---

## Usage

```react
yarn start
```
Puzzles are obtained from the back-end database. 
Puzzles obtained are both unsolved and solved versions.
Uploaded puzzles from picture will be solved by submitting to the back-end which will then query the DS db for resolution.

---

## APIs

```
https://omega2020.herokuapp.com
``` 

```
https://github.com/Lambda-School-Labs/omega2020-be
```
---

## Instructions

### Signup/Login 
    - Secured with JWT

### Play
   ⋅⋅* Place cursor in empty cell.
   ⋅⋅* Enter a unique number for each column, row and field, and from 1 to 9.
   ⋅⋅* Error that is shown with a red cell illustrates the wrong number entered.
   ⋅⋅* Notes allows user to make notes of possible numbers for the given cell, and shows in small numbers within the cell.
   ⋅⋅* Win a game and a notice will pop up congratulating you.

### Learn
   ⋅⋅* tutorials will show when the user selects "tutorials" from the navigation menu.
       ⋅⋅* list each tutorial here

   ⋅⋅* solver for single cell will be given when the user selects the "help" button.

### Save
   ⋅⋅* printed puzzles to resolve at any later time, using Omega2020 Sudoku game board.
   ⋅⋅* saved puzzles will 

---

## Contributing

### Omega2020 Web Development Team:

- Gabriel Romero (UX Designer)
- Connor Sullivan
- Akak Almaz
- Sheila Eichenberger
- Joseph Lambert

---

## License
[MIT](https://choosealicense.com/licenses/mit/)