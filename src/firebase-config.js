import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB_kL8kiowrTkUZcJilLCsD3e59fnu_q5c',
  authDomain: 'odin-photo-tagging.firebaseapp.com',
  projectId: 'odin-photo-tagging',
  storageBucket: 'odin-photo-tagging.appspot.com',
  messagingSenderId: '1065066207649',
  appId: '1:1065066207649:web:d5d1e8e15b8267515393e0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const set = async () => {
//   const docRef = await addDoc(collection(db, 'users'), {
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//   });
//   console.log('Document written with ID: ', docRef.id);
// };

// const get = async () => {
//   const querySnapshot = await getDocs(collection(db, 'users'));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
// };

// const setName = async () => {
//   const newScore = await addDoc(collection(db, 'leaderboards'), {
//     name: 'FirstName',
//     time: '5:00',
//   });
// };

// set();
// get();
// setName();

export default db;
