### news_index
#### description
+ a simple Express/React/Node application that fetches and displays news items based on various country/category selections.
+ the API is served from [newsapi.org](https://newsapi.org/).
+ to run the application:
  +  sign up for a key;
  +  copy it to .env_sample;
  +  rename the file to .env, install the project dependencies and run the application;
  +  OR visit the heroku deployed version [here](https://newsindex.herokuapp.com/).

#### project structure
```
*
|- .env_sample
|- .gitignore
|- license
|- package.json
|- package-lock.json
|- readme.md
|- screenshot.png
|- server.js
|- CLIENT
	|- .gitignore
	|- package.json
	|- package-lock.json
	|- PUBLIC
		|- index.html
	|- SRC
		|- index.js
		|- COMPONENTS
			|- App.js
			|- ContentCategories.js
			|- Footer.js
			|- MainNewsItems.js
			|- Navbar.js
			|- SideNewsItems.js
		|- VARIABLES
			|- styling.js
```

#### used packages
```
BACKEND
+ axios                - making api calls.
+ body-parser          - body parsing middleware.
+ cors                 - cors enableing middleware.
+ dotenv               - loading .env variables to store configuration data.
+ express              - server framework.
+ helmet               - securing express.

FRONTEND
+ axios                - making api calls.
+ react-router-dom     - routing.
+ styled-components    - styling.
```

#### screenshot
![Screenshot](screenshot.png)
