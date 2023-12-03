/**
 * Configuration object for the Prettier plugin with Tailwind CSS support.
 * @module prettierConfig
 * @exports {Object} - The configuration object
 * @property {Array} plugins - An array of plugins to use with Prettier. Includes 'prettier-plugin-tailwindcss'.
 * @property {Array} tailwindFunctions - An array of Tailwind CSS functions to enable in the code.
 */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tw'],
}
