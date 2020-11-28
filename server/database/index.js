const knex = require("knex")({
  client: "pg",
  connection: {
    user: "postgres",
    password: "password",
    // host: "localhost",
    database: "workspace",
  },
});

module.exports = knex;
