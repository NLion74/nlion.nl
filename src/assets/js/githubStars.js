async function fetchGitHubStars() {
    const response = await fetch(
        "https://api.github.com/repos/NLion74/Matrix-Notifier"
    );
    const data = await response.json();

    const starsElement = document.getElementById("github-stars");

    if (data.stargazers_count) {
        starsElement.innerHTML = `<span class="star-symbol">★</span> <span class="star-count">${data.stargazers_count}</span>`;
    } else {
        starsElement.textContent = "Failed to load stars";
    }
}

fetchGitHubStars();
