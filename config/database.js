module.exports = ({ env }) => {
  if (process.env.NODE_ENV === 'development')
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "mongoose",
          settings: {
            host: env("DATABASE_HOST"),
            srv: env.bool("DATABASE_SRV", true),
            port: env.int("DATABASE_PORT", 27017),
            database: env("DATABASE_NAME"),
            username: env("DATABASE_USERNAME"),
            password: env("DATABASE_PASSWORD"),
          },
          options: {
            authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
            ssl: env.bool("DATABASE_SSL", true),
          },
        },
      },
    };
  else
  // Run prod also because i don't have time
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "mongoose",
        settings: {
          host: env("DATABASE_HOST"),
          srv: env.bool("DATABASE_SRV", true),
          port: env.int("DATABASE_PORT", 27017),
          database: env("DATABASE_NAME"),
          username: env("DATABASE_USERNAME"),
          password: env("DATABASE_PASSWORD"),
        },
        options: {
          authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
          ssl: env.bool("DATABASE_SSL", true),
        },
      },
    },
  };
    // return {
    //   defaultConnection: "default",
    //   connections: {
    //     default: {
    //       connector: "bookshelf",
    //       settings: {
    //         client: "sqlite",
    //         filename: env("DATABASE_FILENAME", ".tmp/data.db"),
    //       },
    //       options: {
    //         useNullAsDefault: true,
    //       },
    //     },
    //   },
    // };
};
