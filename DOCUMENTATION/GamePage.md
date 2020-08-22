**Name:** ​Puzzle Page  
**User type:** ​All  
**Description:** ​A Sudoku board populates with data from our DS API with choice of over 5000 puzzles, providing
a user (logged in or not) with the ability to immediately play a game of Sudoku by choosing puzzle levels by difficulty and different themes.  
**Use Case:** ​A user wants to quickly access the site and get into a game
**Known Issue:** If a user enters multiple invalid inputs, shows hints, and then manually deletes those invalid inputs and shows hints again _without_ hitting undo', the empty cells will trigger a red conflict status

**Name:** ​Resume Puzzle Page  
**User type:** ​Logged in user  
**Description:** A resume puzzle functionality resumes the puzzle previosly saved on puzzle page.  
**Use Case:** If a user needs to leave the web app before finishing the sudoku and wants to save it for later.

## ​Sudoku Puzzle Display

**What services, APIs, or platforms will you use to implement this feature?**

- 'Vanilla' CSS and JavaScript

**What are the costs and benefits of using this solution?**

- Cost
  - The rest of the application will utilize Material UI so we may encounter styling disconnects
- Benefits
  - The complex structure of the board and the functions that operate it and its features benefits from utilizing a simple, hands on form of styling

## ​Save and Resume

**What services, APIs, or platforms will you use to implement this feature?**

- BE

  - Node JS, Knex, Express provided the api and the storage of user settings and info.

- FE
  - Axios, React JS, JWT because only available to logged user. We also utilized Hooks as state management.
  - Material UI and CSS used for styling

**What are the costs and benefits of using this solution?**

- Cost

  - Time efficiency lost due to remote BE.

- Benefits
  - As with the above function, the complex structure of the board and the functions that operate it and its features benefits from utilizing a simple, hands on form of styling.
  - Able to access saved data from any device.
