### API Documentation

**Deployed Backend for this project**
https://omega2020.herokuapp.com/

**Backend Repository**
https://github.com/Lambda-School-Labs/omega2020-be

# MISSION 

**What problem does this application solve?**  
Current Web-based Sudoku puzzles are clumsy, hard to use, and not visually stimulating or rewarding. Furthermore, few if any offer the able to register on the site and save your puzzle to come back to later. Also options to choose a theme (darkmode,)

**Who are your competitors and how do they solve this problem?**  

1. Websudoku.com: Websudoku allows unregistered users the ability to immediately access their wesite and get into a puzzle, with many to choose from with varying levels of difficulty. However the UI that they offer is somewhat boring and there is no way for a user to save and return to a puzzle. 

2. Sudoku.com: Also allows unregistered users the ability to immediately access their wesite and get into a puzzle, with many to choose from with varying levels of difficulty. Their UI is relatively attractive and user-friendly and they offer a good range of features, but still no save puzzle functionality for a logged-in user.

3. Sudokukingdom.com: Also allows unregistered users the ability to immediately access their wesite and get into a puzzle, with many to choose from with varying levels of difficulty.  Sudokukingdom also allows users the ability to register form the site and compete against the rest of the existing user database with a decent amount of features, but a cluttered, non-attractive UI.

# Technology

## Front End

### Solution: React & React Router  
**What problems does this solution solve for this specific project?**
- Increases performance.
- React Router manages the url and declares what will be rendered
- It is the best of both worlds, integrating both server-side and client-side rendering.
- Can reuse components
- Code is stable since it flows in one direction

**What are the costs of using this solution?**
- The app has to load fully before it is useful
- Lots of libraries must be used 
- Folder structure can get complicated 

**What will you be using for styling and presentation?**  
- Material UI and some 'vanilla' CSS

## Back End

### Solution: Node & Express  
**What problems does this solution solve for this specific project?:**
- Easy to configure
- Middleware added for security
- Large, active support community
- Benefit of Fullstack JS

**What are the costs of using this solution?**  
- Unstable API due to constant updates lacking backwards compatibility.
- Express error messages can often times be unhelpful

## Database

### Solution: Postgres with Knex  
**What problems does this solution solve for this specific project?**  
- Supports concurrency
- Scalable
- Security

**What are the costs of using this solution?**  
- Slower performance
- Relational database structuring
- Open source
- Postgres debugging can be difficult

## Deployment

### Solution: Netlify & Heroku  
**What problems does this solution solve for this specific project?**
- Great Github integration ****allowing for branch deployments and predeployment conflict checks.
- Quick and easy setup, with very little additional code needed
- Free deployment
- Heroku offers relatively easy Postgres implementation

**What are the costs of using this solution?**
- We have no control over 'out of house' platforms
- Relatively low network performance on Heroku

# Description of Features  

**Name:** ​Landing Page  
**User type:** ​All  
**Description:** ​Marketing site for existing and prospective users, contains login, registration and play puzzle
buttons to access application
**Use Case:** ​A prospective user is seeking a place to play Sudoku on their device, so they come to our landing
page to learn more about our program and the features we offer and potentially register as a new user
An existing user wishes to login  

---

**Name:** ​Registration Page  
**User type:** ​All  
**Description:** Allows for creation of new users
**Use Case:** ​A new user needs to create an account to have access to extended functionality like saving settings, saving a puzzle, or challenging a friend

---

**Name:** ​Login Page  
**User type:** ​All  
**Description:** ​Performs login authentication, redirects based on result  
**Use Case:** ​A user wants to login using proper credentials; to have access to    account specific features 

---

**Name:** ​Puzzle Page
**User type:** ​All  
**Description:** ​A Sudoku board populates with data from our backend, providing 
a user (logged in or not) with the ability to immediately play a game of Sudoku
**Use Case:** ​A user wants to quickly access the site and get into a game
**Known Issue:** If a user enters multiple invalid inputs, shows hints, and then manually deletes those invalid inputs and shows hints again *without* hitting undo', the empty cells will trigger a red conflict status 

---

# Implementation of Features

---
### ​Registration Page / Login Page
**What services, APIs, or platforms will you use to implement this feature?**  
- JWT and Bcrypt for Authentication    

**What are the costs and benefits of using this solution?** 

Better overall security would be offered via a third party, Auth0 for example. However, due **** dev resource depletion the need to cut out unneccessary modules was recognized. The Auth0 will be utilized in later versions. While currently using JWT only allows for faster and more reliable implementation while still offering solid security.

- Cost
    - Not as secure as Auth0 or Firebase
    - Login flow potentially requires more interaction from user.
- Pros
    - Security is still quite good
    - Fast, reliable implementation

---
### ​Sudoku Puzzle Display
**What services, APIs, or platforms will you use to implement this feature?**
- 'Vanilla' CSS and JavaScript

**What are the costs and benefits of using this solution?**  
- Cost
  - The rest of the application will utilize Material UI so we may encounter styling disconnects 
- Benefits
  - The complex structure of the board and the functions that operate it and its features benefits from utilizing a simple, hands on form of styling
---
