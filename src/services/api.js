const getDataFromApi = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((characters) =>
      characters.map((character) => {
        return {
          name: character.name,
          image: character.image,
          species: character.species,
        };
      })
    );
};

export default getDataFromApi;
