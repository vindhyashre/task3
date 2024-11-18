document.getElementById("fetch-joke").addEventListener("click", fetchJoke);

function fetchJoke() {
  const jokeContainer = document.getElementById("joke");
  jokeContainer.textContent = "Loading...";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.punchline}</p>`;
    })
    .catch((error) => {
      jokeContainer.textContent = "Error fetching joke. Please try again.";
    });
}
