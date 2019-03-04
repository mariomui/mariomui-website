const axios = require('axios');

function post(baseUrl, data) {
  return axios({
    method: 'post',
    baseUrl,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json',
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'OPTIONS,POST',
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,

    },
    data
  })
}

module.exports = {
  post
}