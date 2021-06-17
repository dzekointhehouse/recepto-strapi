module.exports = ({ env }) => ({
  host: env('HOST', 'https://nervous-curran-2bff49.netlify.app'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f3b000cce9d62e1e4dbb34d72d83b07f'),
    },
  },
});
