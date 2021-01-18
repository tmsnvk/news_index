### news_index || project-002
#### description
+ a React front-end and Node.JS/Nest.JS back-end application extended with Typescript that fetches and displays news items based on various country/category selections.
+ the third-party API is served from [newsapi.org](https://newsapi.org/).
+ to run the application:
  + sign up for a key on the API's website.
  + copy the key to ```/server/.env_sample```.
  + rename ```/server/.env_sample``` to ```.env```, install both the client/server dependencies and start the application.
  + OR visit the live version [here](https://tamasnovak.net/newsindex/). The back-end might need a minute or two to boot up as it is currently hosted on a free tier option @Heroku.

#### used packages
```
FRONTEND
+ axios                - http client.
+ react                - client framework.
+ react-ga             - google analytics package.
+ react-helmet         - document head element handler.
+ react-router-dom     - routing.
+ styled-components    - css-in-js styling.
+ typescript           - javascript extension.

BACKEND
+ axios                - http client.
+ compression          - compression middleware.
+ cors                 - cors enabling middleware.
+ dotenv               - .env variable loader to store not-public configuration data.
+ nest.js              - server framework.
+ helmet               - express securing middleware.
+ typescript           - javascript extension.
```

#### screenshot
![Screenshot](screenshot.png)