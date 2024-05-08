const withImages = require("next-images");

module.exports = {
    withImages,
    env: {HOST: process.env.HOST, PORT: process.env.PORT}
};
