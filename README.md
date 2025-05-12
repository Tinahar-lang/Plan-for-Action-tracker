#Plant-for-Action Tracker

A gamified web app that promotes environmental sustainability by allowing users to log their eco-friendly actions (like using public transport, recycling, or planting trees) and earn virtual rewards such as trees. These can translate into **real trees planted** via NGO partnerships.

---

##Project Overview

The **Plant-for-Action Tracker** is a community-driven environmental platform aimed at motivating users to engage in sustainable behaviors. The platform integrates **AI-based image recognition** to verify submitted actions and gamifies the process through virtual rewards.

---

##Features

- User registration and login (Firebase Authentication)
- AI image recognition to verify eco-actions (via TensorFlow.js or Google Cloud Vision API)
- Upload images of eco-friendly actions (e.g., recycling bins, public transport)
- Earn virtual trees for verified actions
- Leaderboard to compete and track environmental impact
- Partner NGO integration to plant real trees
- Firebase Firestore and Firebase Storage for data/image management

---

## Technologies Used

| Stack        | Tools / Frameworks |
|--------------|--------------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend**  | Node.js, Express.js |
| **Database** | Firebase Firestore |
| **Storage**  | Firebase Storage |
| **Authentication** | Firebase Auth |
| **AI**       | TensorFlow.js, Google Vision API |
| **Deployment** | Vercel / Firebase Hosting (optional) |

---

##Installation Guide

###Prerequisites
- Node.js and npm installed
- Firebase account and project
- Firebase CLI (optional for hosting)

###Setup Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/plant-for-action-tracker.git
cd plant-for-action-tracker

# 2. Install dependencies
npm install

# 3. Add your Firebase credentials
Place your `serviceAccountKey.json` in the root directory
Update the `firebaseConfig.js` with your Firebase app's config

# 4. Run the app
node server/app.js

