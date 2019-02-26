// http://eslint.org/docs/user-guide/configuring

module.exports = {
  "extends": [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "root": true,
  "env": {
    "node": true
  },
  "rules": {
    "no-tabs": "off",
    "no-mixed-spaces-and-tabs": "off"
  }
};
