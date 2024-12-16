import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain: "osis-methonam.firebaseapp.com",
  projectId: "osis-methonam",
  storageBucket: "osis-methonam.firebasestorage.app",
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Menambahkan Jurnal
async function pushJournal() {
  const journalRef = doc(collection(db, "journals"));

  await setDoc(journalRef, {
    title: "tes pertama",
    content: "lorem ipsum dolar sit amet",
    date: "16 December 2024",
    author: "Tia & Nesya",
  });
}

async function pushAgenda() {
  const agendaRef = doc(collection(db, "agendas"));

  await setDoc(agendaRef, {
    title: "Perayaan Natal 2024",
    date: "13 Desember 2024",
    content: "lorem ipsum dolar sit amet",
  });
}

export { pushJournal, pushAgenda };
