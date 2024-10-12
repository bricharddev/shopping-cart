import axios from "axios";

async function getAll(query) {
  const data = await axios
    .get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((res) => res.data);

  return data;
}

async function getByCategorie(categorieId) {
  const data = await axios
    .get(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categorieId}`
    )
    .then((res) => res.data);

  return data;
}

export { getAll, getByCategorie };
