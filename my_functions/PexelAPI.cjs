// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));

require("isomorphic-fetch");

// const cookie = (...args) =>
//   import("cookie").then(({ default: fetch }) => fetch(...args));

// const cookie = require("cookie");

const _API_KEY = process.env.REACT_APP_PEXEL_KEY;

exports.handler = async (event, context) => {
  let query = "blACK";
  let images;

  if (event.httpMethod === "POST") {
    let { queryString } = JSON.parse(event.body);
    query = queryString;

    const API_ENDPOINT = `https://api.pexels.com/v1/search?query=${query}&per_page=20`;

    images = await fetch(API_ENDPOINT, {
      headers: { Authorization: _API_KEY },
    });
    const test = await images.json().then((data) => {
      return JSON.stringify(data);
    });
    // console.log(test);

    return {
      statusCode: 200,
      headers: {},
      body: test,
    };
  } else {
    return {
      statusCode: 500,
    };
  }
};
