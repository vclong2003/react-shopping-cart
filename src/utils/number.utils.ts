/**
 * Round price to 2 decimal places (for displaying)
 * @param {number} price
 * @returns {string}
 */
const roundPrice = (price: number): string => {
  return price.toFixed(2);
};

export { roundPrice };
