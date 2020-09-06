const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (apiURL, object) => {
  return new Promise((resolve, reject) => {
    if (apiURL === 'https://icanhazdadjoke.com/') {
      fetch(apiURL, object)
        .then((response) => response.json())
        .then((data) => resolve(data));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
};
const object = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
};

const showJoke = async () => {
  const { joke } = await fetchJoke(API_URL, object);
  const jokeContainer = document.createElement('span');
  const body = document.querySelector('body');
  jokeContainer.innerText = joke;
  jokeContainer.classList = 'joke';
  body.appendChild(jokeContainer);
};

window.onload = () => showJoke();