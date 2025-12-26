
/**
 * Parses the provided string expression, returning the most appropiate
 * type: object (or array), boolean, number or string
 * @param {*} s 
 * @returns *
 * @throws exception
 */
export function parseExpression(s = '') {
  // Parse only strings
  if (typeof s !== 'string' || s === '')
    return s;

  // If the expression starts with "{", "[", or is a boolean, parse it as JSON
  if (/(?:^{|^\[|^true$|^false$|^null$)/.test(s))
    return JSON.parse(s);

  // Check if it's a numeric expression
  const n = Number(s);
  if (!isNaN(n))
    return n;

  // Otherwise return the original string
  return s;
}

/**
 * Returns a clone of the provided object, interpreting string values staring with "{" or "[" as JSON expressions that
 * will be parsed and converted to real objects and arrays
 * @param {object} data 
 * @returns object
 */
export function parseStringSettings(data = {}) {
  return Object.keys(data).reduce((result, k) => {
    try {
      result[k] = parseExpression(data[k]);
    } catch (err) {
      console.error('Error parsing value:', data[k], err);
    }
    return result;
  }, {});
}

/**
 * Loads the specified Google Font
 * @param {string=} fontName - The name of the Google Font to be loaded. Default is 'Roboto'
 * @param {string=} weights - The desired font weights, separed by comma. Defaults to '300,400,500,700'
 */
export function loadGoogleFont(fontName = 'Roboto', weights = '300,400,500,700') {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css?family=${fontName}:${weights}&display=swap`;
  document.head.appendChild(link);
}

