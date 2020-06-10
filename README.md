<h1 align="center">Welcome to Omega 2020</h1>
<p align="center">The online sudoku website.</p>

<div align="center">
   
  [![Maintainability](https://api.codeclimate.com/v1/badges/a8ac2afebe3339176f28/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/omega2020-fe/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a8ac2afebe3339176f28/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/omega2020-fe/test_coverage)
  [![Website](https://img.shields.io/website?color=green&style=flat-square&url=https://omega2020.netlify.app/)](https://omega2020.netlify.app/)

</div>

<p align="center"> 🛠 This is home to Omega 2020, an online sudoku app geared towards sudoku lovers and people who want to improve their sudoku skills. Learn how to play, upload your own sudoku games, and compete with friends :) </p>

<br/>

---

This repo hosts:

- The [Omega 2020](#) frontend and server code
- A Web development environment

:desktop_computer: Deployed URL: \***\*\_\_\_\*\*** [![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](https://omega2020.netlify.app/)

## Contributors

🙌 This project exists thanks to all the people who contribute. [[Contribute](#)].

> LABSPT11

|                                            [Jessica Dosseh](https://github.com/JessicaDosseh)                                             |                           [Alexis Anderson](https://github.com/#)                           |                           [Carlos Turcios](https://github.com/#)                            |                            [Tara Sherman](https://github.com/#)                             |                           [Vincent Adeniji](https://github.com/#)                           |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                  [<img src="assets/user-icon.png" width = "100" border-radius="50%"/>](https://github.com/JessicaDosseh)                  | [<img src="assets/user-icon.png" width = "100" border-radius="50%"/>](https://github.com/#) | [<img src="assets/user-icon.png" width = "100" border-radius="50%"/>](https://github.com/#) | [<img src="assets/user-icon.png" width = "100" border-radius="50%"/>](https://github.com/#) | [<img src="assets/user-icon.png" width = "100" border-radius="50%"/>](https://github.com/#) |
|                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/JessicaDosseh)                         |       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/#)        |       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/#)        |       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/#)        |       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/#)        |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jessica-dosseh-452a10173/) |    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](#)    |    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](#)    |    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](#)    |    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](#)    | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](#) |

---

## INDEX

- [About Project](#Welcome-to-Omega-2020)
- [Getting Started](#getting-started)
  - [Project Set Up](#Project-Set-Up)
- [Development Info](#development-info)
  - [Tech Stack](#Tech-Stack)
  - [API Documentation](#API-Documentation)
  - [How to Contribute](#Contributing)

> 📂 For more information, read through our [DOCUMENTATION](#)

---

# Getting Started

## Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository in your terminal.
- [ ] `git pull` to make sure you are uptodate
- [ ] `git checkout -b new-branch-name`
- [ ] Run `yarn` to install node_module.
- [ ] Run `yarn start` to start.

:rocket: DO your magic!

---

# Development Info

## Tech Stack

> TBD

### API Documentation

> URL

> > **Deployed Backend for this project** > > https://omega2020.herokuapp.com/

> > **Backend Repository** > > https://github.com/Lambda-School-Labs/omega2020-be

> > **DS Puzzles API**
> > postgres://postgres:omega2020database@omega2020.cbydc0au6atn.us-east-2.rds.amazonaws.com:5432/postgres

> > **DS Computer Vision (Upload) API** > > https://api.lambda-omega2020.com/demo_file

> > **DS Repository** > > https://github.com/Lambda-School-Labs/omega2020-ds

# MISSION

**What problem does this application solve?**  
Current Web-based Sudoku puzzles are clumsy, hard to use, and not visually stimulating or rewarding. Furthermore, few if any offer the able to register on the site and save your puzzle to come back to later. Or choose a difficulty(rendom, easy, medium etc..) and theme (darkmode,city mode etc..) for your puzzle page. Also no other Sudoku Web apps have option to upload a paper sudoku image, bring whole puzzle over to the web and continue playing.

**Who are your competitors and how do they solve this problem?**

1. Websudoku.com: Websudoku allows unregistered users the ability to immediately access their wesite and get into a puzzle, with many to choose from with varying levels of difficulty. However the UI that they offer is somewhat boring and there is no way for a user to save and return to a puzzle.

2. Sudoku.com: Also allows unregistered users the ability to immediately access their wesite and get into a puzzle, with many to choose from with varying levels of difficulty. Their UI is relatively attractive and user-friendly and they offer a good range of features, but still no save puzzle functionality for a logged-in user.

3. Sudokukingdom.com: Also allows unregistered users the ability to immediately access their wesite and get into a puzzle, with many to choose from with varying levels of difficulty. Sudokukingdom also allows users the ability to register form the site and compete against the rest of the existing user database with a decent amount of features, but a cluttered, non-attractive UI.

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

- Material UI, React Styling Components and some 'vanilla' CSS

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

**What problems does this solution solve for this specific
project?**

- Supports concurrency

- Scalable

- Security

**What are the costs of using this solution?**

- Slower performance
- Relational database structuring
- Open source
- Postgres debugging can be difficult

## Deployment

## Solution: Netlify & Heroku

- Login Omega2020 google account

**What problems does this solution solve for this specific project?**

- Great Github integration for allowing branch deployments and predeployment conflict checks.

- Quick and easy setup, with very little additional code needed.

- Free deployment.

- Heroku offers relatively easy Postgres implementation.

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
**Use Case:** ​A new user needs to create an account to have access to extended functionality like saving settings, saving a puzzle, or uploading and paper sudoku image and continue playing on the web.

---

**Name:** ​Login Page  
**User type:** ​All  
**Description:** ​Performs login authentication, redirects based on result  
**Use Case:** ​A user wants to login using proper credentials; to have access to account specific features

---

**Name:** ​Puzzle Page  
**User type:** ​All  
**Description:** ​A Sudoku board populates with data from our DS API with choice of over 5000 puzzles, providing
a user (logged in or not) with the ability to immediately play a game of Sudoku by choosing puzzle levels by difficulty and different themes.  
**Use Case:** ​A user wants to quickly access the site and get into a game
**Known Issue:** If a user enters multiple invalid inputs, shows hints, and then manually deletes those invalid inputs and shows hints again _without_ hitting undo', the empty cells will trigger a red conflict status

---

**Name:** ​Resume Puzzle Page  
**User type:** ​Logged in user  
**Description:** A resume puzzle functionality resumes the puzzle previosly saved on puzzle page.  
**Use Case:** If a user needs to leave the web app before finishing the sudoku and wants to save it for later.

---

**Name:** ​Upload Puzzle  
**User type:** ​Logged in user  
**Description:** Upload puzzle feature let's a user upload paper sudoku puzzle and turn it to digital version of the same puzzle.  
**Use Case:** User uploads a picture from a printed version that allows the user to start or continue to play (in the UI) with a digital version of the valid puzzle.

---

**Name:** ​About us  
**User type:** ​All  
**Description:** This page is about our team.  
**Use Case:** Show everyone the amazing collaborative team!

---

# Implementation of Features

## ​Registration Page / Login Page

**What services, APIs, or platforms will you use to implement this feature?**

- JWT and Bcrypt for Authentication

**What are the costs and benefits of using this solution?**

Better overall security would be offered via a third party, Auth0 for example. However, due to dev resource depletion the need to cut out unneccessary modules was recognized. The Auth0 will be utilized in later versions. While currently using JWT only allows for faster and more reliable implementation while still offering solid security.

- Cost
  - Not as secure as Auth0 or Firebase
  - Login flow potentially requires more interaction from user.
- Pros
  - Security is still quite good
  - Fast, reliable implementation

---

## ​Sudoku Puzzle Display

**What services, APIs, or platforms will you use to implement this feature?**

- 'Vanilla' CSS and JavaScript

**What are the costs and benefits of using this solution?**

- Cost
  - The rest of the application will utilize Material UI so we may encounter styling disconnects
- Benefits
  - The complex structure of the board and the functions that operate it and its features benefits from utilizing a simple, hands on form of styling

---

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

---

## ​Upload

**What services, APIs, or platforms will you use to implement this feature?**

- Axios is used in a custom Hook called axiosWithAuth. React JS, utilizing Hooks, posts to the DS API that is running elastic Beanstalk on a AWS platform.

**What are the costs and benefits of using this solution?**

- Cost

  - Initial entry into DS API is restricted until it "wakes up" and allows the appropriate bandwidth. This causes a time issue on initial post.

  - Strict parameters must be met to access through CORS.

- Benefits

  - User can resume play on their previously saved game, regardless of device.

  - Ability to upload a printed Sudoku puzzle and finish it in the UI.

  - Future release to include ability to see solved puzzle.

---

## ​Themes/Mode

**What services, APIs, or platforms will you use to implement this feature?**

- Utilized custom Hooks to create the themes.
- Persisted in local storage.
- CSS styling framework used.

**What are the costs and benefits of using this solution?**

- Cost

  - n/a, none identified.

- Benefits

  - User can customize their play experience.

  - User can avoid eyestrain, particularly at night.

---

### Known Bugs and Issues

1.  CORS - Upload Image functionlity doesn't work without browser CORS extension.

    - For future dev: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

2.  Media Queries - The usage of multiple styles (Material UI, CSS Components) have it's effects in overiding some of media query styles.

3.  On resume, history doesn't persist with the undo functionality.

4.  The saved value will still throw an error if that value is manually deleted instead of using the undo button.

---

## 🤝 Contributing

Omega 2020 is a community project. We invite your participation through issues and pull requests! You can peruse the [contributing guidelines](#).

When adding or changing a service [please add tests](#).

This project has quite a backlog of suggestions! If you're new to the project, maybe you'd like to open a pull request to address one of them:
