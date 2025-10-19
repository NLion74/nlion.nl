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

            console.log(data);

            if (data.stargazers_count > 0) {
                el.innerHTML = `<span class="star-symbol">★</span> <strong class="star-count">${data.stargazers_count}</strong>`;
            } else {
                el.style.display = "none";
            }
        } catch (error) {
            el.textContent = "Error fetching stars";
            el.style.display = "none";
        }
    }
}

fetchGitHubStars();
