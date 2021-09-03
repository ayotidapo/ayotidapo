const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  let env = {};
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    env = {
      mongodb_username: "",
      mongodb_password: "",
      mongodb_clustername: "",
      mongodb_database: "my-portfolio",
    };
  } else {
    env = {
      mongodb_username: "ayotidapo_prod",
      mongodb_password: "2YkcXq43KyPk0vqp",
      mongodb_clustername: "cluster0",
      mongodb_database: "my_portfolio_prod",
    };
  }

  return {
    reactStrictMode: true,
    images: {
      domains: ["res.cloudinary.com"],
    },
    env,
  };
};
