**Name:** ​Registration Page  
**User type:** ​All  
**Description:** Allows for creation of new users
**Use Case:** ​A new user needs to create an account to have access to extended functionality like saving settings, saving a puzzle, or uploading and paper sudoku image and continue playing on the web.

---

**Name:** ​Login Page  
**User type:** ​All  
**Description:** ​Performs login authentication, redirects based on result  
**Use Case:** ​A user wants to login using proper credentials; to have access to account specific features

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
