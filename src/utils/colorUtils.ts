/**
 * Lightens a given hex color by a specified percentage.
 *
 * @param {string} hexColor The color to lighten (e.g., "#RRGGBB").
 * @param {number} percentage The percentage to lighten the color (0-100).
 * @returns {string} The lightened hex color.
 */
function lightenColor(hexColor: string, percentage: number): string {
  // Remove the '#' symbol if present
  hexColor = hexColor.replace('#', '');

  // Parse the hex color into its RGB components
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the amount to lighten each component
  const lightenAmount = (255 - r) * (percentage / 100);
  const lightengAmount = (255 - g) * (percentage / 100);
  const lightenbAmount = (255 - b) * (percentage / 100);

  // Lighten each component
  const newR = Math.min(255, Math.floor(r + lightenAmount));
  const newG = Math.min(255, Math.floor(g + lightengAmount));
  const newB = Math.min(255, Math.floor(b + lightenbAmount));

  // Convert the lightened components back to hex
  const newHexR = newR.toString(16).padStart(2, '0');
  const newHexG = newG.toString(16).padStart(2, '0');
  const newHexB = newB.toString(16).padStart(2, '0');

  // Return the lightened hex color
  return `#${newHexR}${newHexG}${newHexB}`;
}

/**
 * Darkens a given hex color by a specified percentage.
 *
 * @param {string} hexColor The color to darken (e.g., "#RRGGBB").
 * @param {number} percentage The percentage to darken the color (0-100).
 * @returns {string} The darkened hex color.
 */
function darkenColor(hexColor: string, percentage: number): string {
  // Remove the '#' symbol if present
  hexColor = hexColor.replace('#', '');

  // Parse the hex color into its RGB components
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the amount to darken each component
  const darkenAmount = r * (percentage / 100);
  const darkengAmount = g * (percentage / 100);
  const darkenbAmount = b * (percentage / 100);

  // Darken each component
  const newR = Math.max(0, Math.floor(r - darkenAmount));
  const newG = Math.max(0, Math.floor(g - darkengAmount));
  const newB = Math.max(0, Math.floor(b - darkenbAmount));

  // Convert the darkened components back to hex
  const newHexR = newR.toString(16).padStart(2, '0');
  const newHexG = newG.toString(16).padStart(2, '0');
  const newHexB = newB.toString(16).padStart(2, '0');

  // Return the darkened hex color
  return `#${newHexR}${newHexG}${newHexB}`;
}

/**
 * Makes a given hex color transparent by a specified percentage.
 *
 * @param {string} hexColor The color to make transparent (e.g., "#RRGGBB").
 * @param {number} percentage The percentage of transparency (0-100).
 * @returns {string} The transparent hex color (e.g., "#RRGGBBAA").
 */
function makeTransparent(hexColor: string, percentage: number): string {
  // Remove the '#' symbol if present
  hexColor = hexColor.replace('#', '');

  // Calculate the alpha value (0-1)
  const alpha = Math.round(((100 - percentage) / 100) * 255);

  // Convert the alpha value to hex
  const alphaHex = alpha.toString(16).padStart(2, '0');

  // Return the transparent hex color
  return `#${hexColor}${alphaHex}`;
}

export { lightenColor, darkenColor, makeTransparent };
