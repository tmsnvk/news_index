### news_index || project-002 || tmsnvk
#### description
+ an Express/React/Node application that fetches and displays news items based on various country/category selections.
+ the API is served from [newsapi.org](https://newsapi.org/).
+ to run the application:
  +  sign up for a key;
  +  copy it to .env_sample;
  +  rename the file to .env, install the project dependencies with package.json and run the application;
  +  OR visit the live heroku deployed version [here](https://newsindex.herokuapp.com/).

#### used packages
```
BACKEND
+ axios                - http client.
+ cors                 - cors enabling middleware.
+ dotenv               - .env variable loader to store not-public configuration data.
+ express              - server framework.
+ helmet               - express securing middleware.

FRONTEND
+ axios                - http client.
+ react                - front-end framework.
+ react-ga             - google analytics package.
+ react-router-dom     - routing.
+ styled-components    - css-in-js styling.
```

#### screenshot
![Screenshot](screenshot.png)