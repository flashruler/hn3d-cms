module.exports = ({ env }) => ({
  host: process.env.HOST,
  port: process.env.PORT,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
