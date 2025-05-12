import { auth, db } from './firebase-config.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

const logoutBtn = document.getElementById('logout');

onAuthStateChanged(auth, async (user) => {
    if (user) {
        document.getElementById('user-name').innerText = user.displayName || "Anonymous";
        document.getElementById('user-email').innerText = user.email;

        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
            const data = userDoc.data();
            document.getElementById('total-points').innerText = data.points || 0;
            document.getElementById('trees-planted').innerText = Math.floor((data.points || 0) / 1000);
            document.getElementById('actions-completed').innerText = (data.actions || []).length;

            const badgesList = document.getElementById('badges-list');
            badgesList.innerHTML = '';
            if (data.badges && data.badges.length > 0) {
                data.badges.forEach(badge => {
                    const li = document.createElement('li');
                    li.textContent = badge;
                    badgesList.appendChild(li);
                });
            } else {
                badgesList.innerHTML = '<li>No badges yet — keep taking action!</li>';
            }
        }
    } else {
        window.location.href = 'login.html';
    }
});

logoutBtn.addEventListener('click', async () => {
    await signOut(auth);
    window.location.href = 'login.html';
});
