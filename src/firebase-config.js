import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

export default db;
