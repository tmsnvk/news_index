#### news_index
![Screenshot](screenshot.png)

#### description
- a simple Express/React/Node app that fetches news items based on various country/category selections.
- the API is served from [newsapi.org](https://newsapi.org/).
- to run the app:
  -  sign up for a key;
  -  copy it to .env_sample;
  -  rename the file to .env.

#### project structure
```
*
|- license
|- package-lock.json
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