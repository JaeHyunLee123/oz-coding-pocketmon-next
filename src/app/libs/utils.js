/**
 *
 * @param {number} id
 * @returns {string}
 */
export const createPocketmonSpeciesGetUrl = (id) => {
  return `https://pokeapi.co/api/v2/pokemon-species/${id}`;
};

/**
 * @typedef {Object} CreatePocketmonImageUrlProps
 * @property {number} id
 * @property {boolean} isFront
 */

/**
 *
 * @param {CreatePocketmonImageUrlProps} props
 * @returns {string}
 */

export const createPocketmonImageUrl = ({ id, isFront = true }) => {
  const baseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
  if (isFront) {
    return `${baseUrl}/${id}.png`;
  } else {
    return `${baseUrl}/back/${id}.png`;
  }
};
