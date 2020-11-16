### news_index || project-002a
#### description
+ a React front-end and Node/Express back-end application extended by Typescript that fetches and displays news items based on various country/category selection.
+ the API is served from [newsapi.org](https://newsapi.org/).
+ to run the application:
  +  sign up for a key;
  +  copy the key to .env_sample;
  +  rename .env_sample to .env, install the project dependencies and run the application;
  +  OR visit the live heroku deployed version [here](https://newsindex.herokuapp.com/).

#### used packages
```
BACKEND
+ axios                - http client.
+ compression          - compression middleware.
+ cors                 - cors enabling middleware.
+ dotenv               - .env variable loader to store not-public configuration data.
+ express              - server framework.
+ helmet               - express securing middleware.
+ typescript           - javascript extension.

FRONTEND
+ axios                - http client.
+ react                - front-end framework.
+ react-ga             - google analytics package.
+ react-helmet         - document head element handler.
+ react-router-dom     - routing.
+ styled-components    - css-in-js styling.
+ typescript           - javascript extension.
```

#### screenshot
![Screenshot](screenshot.png)