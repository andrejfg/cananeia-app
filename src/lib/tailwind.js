/**
 * Creates a new instance of the TWRNC library with the provided Tailwind CSS configuration.
 * @param {object} tailwindConfig - The Tailwind CSS configuration object.
 * @returns {object} - An instance of the TWRNC library.
 */
import { create } from 'twrnc'
import tailwindConfig from '../../tailwind.config'

// create the customized version...
const tw = create(tailwindConfig) // <- your path may differ

// ... and then this becomes the main function your app uses
export default tw
