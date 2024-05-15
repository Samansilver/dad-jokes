const jokes = document.getElementById('joke');
const btn = document.getElementById('jokesbtn');

btn.addEventListener('click', generateJokes);

generateJokes();


async function generateJokes() {
  const config = {
    headers: { Accept: 'application/json', },
  };

  const res = await fetch('https://icanhazdadjoke.com' , config);

  const data = await res.json();

  jokes.innerHTML = data.joke;
  
  // fetch('https://icanhazdadjoke.com' , config)
  //   .then((res) => res.json())
  //   .then((data) => jokes.innerHTML = data.joke);
}
