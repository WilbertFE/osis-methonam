import { initializeApp } from "firebase/app";
import { DocumentData, getFirestore } from "firebase/firestore";
import {
  doc,
  setDoc,
  collection,
  deleteDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";

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

// Journal
async function pushJournal() {
  const journalRef = doc(collection(db, "journals"));

  await setDoc(journalRef, {
    title: "tes pertama",
    content: "lorem ipsum dolar sit amet",
    date: "16 December 2024",
    author: "Tia & Nesya",
  });
}

async function deleteJournal({ journalId }: { journalId: string }) {
  const journalRef = doc(collection(db, "journals", journalId));
  await deleteDoc(journalRef);
}

async function getJournal({ journalId }: { journalId: string }) {
  const journalRef = doc(db, "journals", journalId);
  const journalSnapshot = await getDoc(journalRef);

  if (!journalSnapshot.exists()) return console.log("No such document!");

  return journalSnapshot.data();
}

async function getJournals() {
  const journalsSnapshot = await getDocs(collection(db, "journals"));
  const journals: DocumentData[] = [];
  journalsSnapshot.forEach((doc) => {
    journals.push(doc.data());
  });
  return journals;
}

// Agenda
async function pushAgenda() {
  const agendaRef = doc(collection(db, "agendas"));

  await setDoc(agendaRef, {
    title: "Perayaan Natal 2024",
    date: "13 Desember 2024",
    content: "lorem ipsum dolar sit amet",
  });
}

async function deleteAgenda({ agendaId }: { agendaId: string }) {
  const agendaRef = doc(db, "agendas", agendaId);

  await deleteDoc(agendaRef);
}

async function getAgendas() {
  const agendasSnapshot = await getDocs(collection(db, "agendas"));
  const agendas: DocumentData[] = [];
  agendasSnapshot.forEach((doc) => {
    agendas.push(doc.data());
  });
  return agendas;
}

async function getAgenda({ agendaId }: { agendaId: string }) {
  const agendaRef = doc(db, "agendas", agendaId);
  const agendaSnapshot = await getDoc(agendaRef);

  if (!agendaSnapshot.exists()) return console.log("No such document!");

  return agendaSnapshot.data();
}

export {
  pushJournal,
  pushAgenda,
  deleteJournal,
  getJournals,
  getJournal,
  deleteAgenda,
  getAgendas,
  getAgenda,
};
