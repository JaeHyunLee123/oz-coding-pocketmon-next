/** @typedef {import("../type").PocketmonData} PocketmonData */

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

export const fetchPocketmonById = async (id) => {
  const response = await fetch(createPocketmonSpeciesGetUrl(id));
  const data = await response.json();

  /**
   * @type {PocketmonData}
   */
  const pocketmonData = {
    id: id,
    name: data.names.find((el) => el.language.name === "ko").name,
    description: data.flavor_text_entries.find(
      (el) => el.language.name === "ko"
    ).flavor_text,
    frontImage: createPocketmonImageUrl({ id, isFront: true }),
    backImage: createPocketmonImageUrl({ id, isFront: false }),
  };

  return pocketmonData;
};
