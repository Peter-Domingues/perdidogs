const withImages = require("next-images");

module.exports = {
    withImages,
    env: {HOST: process.env.API_BASE_URL},
    useFileSystemPublicRoutes: false,
};
