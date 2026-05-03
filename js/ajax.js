document.addEventListener("DOMContentLoaded", function () {
    const tableContainer = document.getElementById("gamesTable");

    if (!tableContainer) {
        return;
    }

    fetch("data/games.json")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (data) {
            let table = `
                <table class="games-data-table">
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Genre</th>
                            <th>Main Platform</th>
                            <th>Other Platforms</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            data.portal.games.forEach(function (game) {
                table += `
                    <tr>
                        <td>${game.title}</td>
                        <td>${game.details.genre}</td>
                        <td>${game.details.platform.main}</td>
                        <td>${game.details.platform.other}</td>
                        <td>${game.details.rating.score}/10 - ${game.details.rating.label}</td>
                    </tr>
                `;
            });

            table += `
                    </tbody>
                </table>
            `;

            tableContainer.innerHTML = table;
        })
        .catch(function (error) {
            tableContainer.innerHTML = "<p class='error-message'>Error loading game data. Please run the website using a local server.</p>";
            console.error("AJAX error:", error);
        });
});
