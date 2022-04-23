
/**
 * Convert to currency expression.
 * ex) 1024 => 1,024
 * @param {number} value 
 * @param {number} decimals 
 */
export default function formatCurrency(value, decimals = 0) {
  let str = Number(value).toFixed(decimals);

  if (decimals) {
    return str.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  } else {
    return str.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
}
