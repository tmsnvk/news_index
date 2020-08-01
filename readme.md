#### news_index
![Screenshot](screenshot.png)

#### description
- a simple Express/React/Node application that fetches news items based on various country/category selections.
- the API is served from [newsapi.org](https://newsapi.org/).
- to run the application:
  -  sign up for a key;
  -  copy it to .env_sample;
  -  rename the file to .env and run the application;
  -  OR visit the heroku deployed version [here](https://newsindex.herokuapp.com/).

#### project structure
```
*
|- license
|- readme.md
|- screenshot.png
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
	|- SERVER
		|- .env_sample
		|- .gitignore
		|- package.json
		|- package-lock.json
		|- server.js
```