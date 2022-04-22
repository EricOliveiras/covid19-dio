const path = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
};

function getCountry(country) {
  return fetch(`${path}/${country}`, headers)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
};

export default getCountry;