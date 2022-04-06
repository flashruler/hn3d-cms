module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f98e017dcebd71e1328175716a16bbba'),
  },
});
