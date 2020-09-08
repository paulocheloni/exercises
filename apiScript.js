const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async (apiURL, object) => {
  const responseObject = (await fetch (apiURL, object)).json()
  document.querySelector('#jokeContainer').innerText = responseObject.joke  
};
const object = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
};


window.onload = () => fetchJoke(API_URL, object);