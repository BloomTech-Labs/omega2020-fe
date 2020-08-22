**Name:** ​Upload Puzzle  
**User type:** ​Logged in user  
**Description:** Upload puzzle feature let's a user upload paper sudoku puzzle and turn it to digital version of the same puzzle.  
**Use Case:** User uploads a picture from a printed version that allows the user to start or continue to play (in the UI) with a digital version of the valid puzzle.

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
