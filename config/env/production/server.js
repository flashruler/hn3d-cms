module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: `${process.env.PORT}`,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
