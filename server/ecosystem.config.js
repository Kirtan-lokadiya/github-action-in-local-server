module.exports = {
  apps: [
    {
      name: "mern-backend",
      script: "./app.js", // Path to your main app file
      env: {
        PORT: 5001,
        MONGO_URI: process.env.MONGO_URI, // This loads your MongoDB URI from .env
      },
    },
  ],
};
