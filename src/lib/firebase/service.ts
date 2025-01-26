/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import {
  addDoc,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { app } from "./init";
import { doc, collection, getDocs } from "firebase/firestore";
import { User } from "@/types/User";

const db = getFirestore(app);

// login
export async function loginWithGoogle(data: any, callback: any) {
  const q = query(collection(db, "users"), where("email", "==", data.email));
  const snapshot = await getDocs(q);

  const user: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user.length > 0) {
    data.role = user[0].role;
    await updateDoc(doc(db, "users", user[0].id), data).then(() => {
      callback({ status: true, data: data });
    });
  } else {
    data.role = "member";
    const now = new Date().toISOString();
    await addDoc(collection(db, "users"), {
      ...data,
      created_at: now,
      updated_at: now,
    }).then(() => {
      callback({ status: true, data: data });
    });
  }
}

// user
export async function getUserByUsername(
  username: string,
  callback: (result: { status: boolean; user: User | null }) => User | null
) {
  const q = query(collection(db, "users"), where("username", "==", username));
  const snapshot = await getDocs(q);

  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as User[] | [];

  if (user.length === 0) {
    return callback({ status: false, user: null });
  }

  if (user.length > 0) {
    return callback({ status: true, user: user[0] });
  }
}
