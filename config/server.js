module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://nervous-curran-2bff49.netlify.app'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f3b000cce9d62e1e4dbb34d72d83b07f'),
    },
  },
});
