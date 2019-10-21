import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/';

const api = axios.create({
  baseURL: url
});

const serviceAPI = {
  getPokemons(page) {
    return api
      .get(`/pokemon/?offset=${page}&limit=20`)
      .then(res => res.data, console.log(Response))
      .then(res => res);
  },
  getPokemonsById(id) {
    return api
      .get(`/pokemon/${id}`)
      .then(res => res.data)
      .then(res => res);
  }
};

export default serviceAPI;
