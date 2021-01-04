### news_index || project-002
#### description
+ a React front-end and Node.JS/Express back-end application extended with Typescript that fetches and displays news items based on various country/category selections.
+ the third-party API is served from [newsapi.org](https://newsapi.org/).
+ to run the application:
  + sign up for a key on the API's website.
  + copy the key to .env_sample.
  + rename .env_sample to .env, install the project dependencies and start the application.
  + OR visit the live heroku-deployed version [here](https://newsindex.herokuapp.com/). The application is currently hosted on a free tier option, so it might need a minute or two to boot up.

#### used packages
```
FRONTEND
+ axios                - http client.
+ react                - front-end framework.
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
+ express              - server framework.
+ helmet               - express securing middleware.
+ typescript           - javascript extension.
```

#### screenshot
![Screenshot](screenshot.png)