const axios = require('axios');

axios({
  url: 'https://shrouded-tundra-41496.herokuapp.com/circles',
  method: 'get',
  headers: { Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MzE4NTU5OTB9.N2zs9qtyQsb07DOxs4OBXQyKpCTPMCzJ-5bn5-NuS1Q'}
}).then(({ data }) => console.log(data))
