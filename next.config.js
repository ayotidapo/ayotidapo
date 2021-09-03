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
      mongodb_username: "",
      mongodb_password: "",
      mongodb_clustername: "",
      mongodb_database: "my-portfolio-prod",
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
