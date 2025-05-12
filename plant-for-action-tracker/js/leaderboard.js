const leaderboardBody = document.getElementById('leaderboardBody');

function displayLeaderboard(entries) {
    leaderboardBody.innerHTML = ''; // Clear old rows
    entries.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.username}</td>
            <td>${entry.points}</td>
            <td>${entry.trees}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

// Try to load real leaderboard from Firestore
db.collection('users').orderBy('points', 'desc').limit(10).get()
    .then(snapshot => {
        if (!snapshot.empty) {
            const entries = snapshot.docs.map(doc => ({
                username: doc.data().username || 'Anonymous',
                points: doc.data().points || 0,
                trees: doc.data().trees || 0
            }));
            displayLeaderboard(entries);
        } else {
            // Fallback: Show random data
            const randomEntries = [
                { username: 'EcoWarrior1', points: 4500, trees: 4 },
                { username: 'GreenQueen', points: 4200, trees: 4 },
                { username: 'PlanetHero', points: 3900, trees: 3 },
                { username: 'RecycleKing', points: 3700, trees: 3 },
                { username: 'SolarSister', points: 3500, trees: 3 },
                { username: 'CompostChamp', points: 3200, trees: 3 },
                { username: 'NatureNinja', points: 3000, trees: 3 },
                { username: 'ZeroWasteZac', points: 2800, trees: 2 },
                { username: 'SustainableSam', points: 2600, trees: 2 },
                { username: 'BioBuddy', points: 2400, trees: 2 }
            ];
            displayLeaderboard(randomEntries);
        }
    })
    .catch(error => {
        console.error('Error loading leaderboard:', error);
        // Show fallback data if Firestore fails
        const fallbackEntries = [
            { username: 'EcoWarrior1', points: 4500, trees: 4 },
            { username: 'GreenQueen', points: 4200, trees: 4 },
            { username: 'PlanetHero', points: 3900, trees: 3 },
            { username: 'RecycleKing', points: 3700, trees: 3 },
            { username: 'SolarSister', points: 3500, trees: 3 },
            { username: 'CompostChamp', points: 3200, trees: 3 },
            { username: 'NatureNinja', points: 3000, trees: 3 },
            { username: 'ZeroWasteZac', points: 2800, trees: 2 },
            { username: 'SustainableSam', points: 2600, trees: 2 },
            { username: 'BioBuddy', points: 2400, trees: 2 }
        ];
        displayLeaderboard(fallbackEntries);
    });
