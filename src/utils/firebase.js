import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import keys from '../../keys';

// Initialize Firebase
const firebaseConfig = {
  apiKey: keys.API_KEY,
  authDomain: keys.AUTH_DOMAIN,
  databaseURL: keys.DATABASE_URL,
  projectId: keys.PROJECT_ID,
  storageBucket: keys.STORAGE_BUCKET,
};

firebase.initializeApp(firebaseConfig);

export async function generateUserDocument(user, additionalData) {
  if (!user) return;
  const userRef = firebase.firestore().doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (err) {
      console.error('Error creating user document');
    }
  }
  return getUserDocument(user.uid);
}

async function getUserDocument(uid) {
  if (!uid) return null;
  try {
    const userDocument = await firebase.firestore().doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (err) {
    console.error('Error fetching user', err);
  }
}

export default firebase;
