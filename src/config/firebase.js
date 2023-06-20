import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBrDsO8jHQrU_8Xv2Nssi88XCT-beKCAO8",
  authDomain: "tiktok---clone-8c7ba.firebaseapp.com",
  projectId: "tiktok---clone-8c7ba",
  storageBucket: "tiktok---clone-8c7ba.appspot.com",
  messagingSenderId: "829248081821",
  appId: "1:829248081821:web:26fc5aeaaa2fc721c0e974"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
