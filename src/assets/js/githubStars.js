async function fetchGitHubStars() {
    const elements = document.querySelectorAll(".github-stars");

    for (const el of elements) {
        const repo = el.getAttribute("data-repo");
        if (!repo) continue;

        try {
            const response = await fetch(
                `https://api.github.com/repos/${repo}`
            );
            const data = await response.json();

            if (data.stargazers_count !== undefined) {
                el.innerHTML = `<span class="star-symbol">★</span> <strong class="star-count">${data.stargazers_count}</strong>`;
            } else {
                el.textContent = "Failed to load stars";
            }
        } catch (error) {
            el.textContent = "Error fetching stars";
        }
    }
}

fetchGitHubStars();
