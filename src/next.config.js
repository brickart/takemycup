const withSass = require('@zeit/next-sass');

module.exports = {
  distDir: '../dist/functions/next',
  ...withSass(),
};
