auth.onAuthStateChanged(user => {
    if (user) {
        loadUserData(user);
        loadLeaderboard();
    } else if (window.location.pathname !== '/login.html' && window.location.pathname !== '/register.html') {
        window.location.href = 'login.html';
    }
});

function loadUserData(user) {
    const userRef = db.collection('users').doc(user.uid);
    userRef.get().then(doc => {
        if (doc.exists) {
            const data = doc.data();
            document.getElementById('points')?.textContent = data.points;
            document.getElementById('trees')?.textContent = data.trees;
            document.getElementById('treeProgress')?.setAttribute('value', data.points % 1000);
        }
    });
}

function logAction(actionType, points) {
    const user = auth.currentUser;
    const userRef = db.collection('users').doc(user.uid);
    userRef.update({
        points: firebase.firestore.FieldValue.increment(points),
        actions: firebase.firestore.FieldValue.arrayUnion({ type: actionType, timestamp: Date.now() })
    }).then(() => {
        checkTreeThreshold(userRef);
        alert('Action logged!');
        loadUserData(user);
    });
}

function checkTreeThreshold(userRef) {
    userRef.get().then(doc => {
        const data = doc.data();
        const treesToPlant = Math.floor(data.points / 1000) - data.trees;
        if (treesToPlant > 0) {
            userRef.update({ trees: data.trees + treesToPlant });
            alert(`🎉 You planted ${treesToPlant} real tree(s)!`);
        }
    });
}

function loadLeaderboard() {
    const board = document.getElementById('leaderboard');
    if (!board) return;
    board.innerHTML = '';
    db.collection('users').orderBy('points', 'desc').limit(10).get().then(snapshot => {
        snapshot.forEach(doc => {
            const data = doc.data();
            const li = document.createElement('li');
            li.textContent = `${data.username || doc.id}: ${data.points} pts, 🌳 ${data.trees}`;
            board.appendChild(li);
        });
    });
}

