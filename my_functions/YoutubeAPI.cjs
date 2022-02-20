// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));
require("isomorphic-fetch");

const _API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

exports.handler = async (event, context) => {
  let query = "";
  let videos;

  if (event.httpMethod === "POST") {
    let { queryString } = JSON.parse(event.body);
    query = queryString;

    // const API_ENDPOINT = `https://youtube.googleapis.com/youtube/v3/search?`;

    let url = new URL(`https://youtube.googleapis.com/youtube/v3/search?`),
      params = {
        part: "snippet",
        maxResults: 25,
        q: query,
        type: "video",
        key: _API_KEY,
      };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    videos = await fetch(url);
    const test = await videos.json().then((data) => {
      // console.log(data);
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
