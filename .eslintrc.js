module.exports = {
  env: {
    "cypress/globals": true,
  },
  extends: [
    "react-app", 
    "react-app/jest",
    "plugin:cypress/recommended",
  ],
}