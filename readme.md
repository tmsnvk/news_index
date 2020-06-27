#### news_index
![Screenshot](screenshot.png)

#### description
- a simple React/Node.js/Express app that loads news items based on various country/category selections.
- the API is served from [newsapi.org](https://newsapi.org/).
- to run the app: (1) sign up for a key; (2) copy it to .env_sample; (3) rename the file to .env.

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