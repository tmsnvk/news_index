export default () => ({
  port: parseInt(process.env.PORT) || 3001,
  apiKey: process.env.API_KEY
});