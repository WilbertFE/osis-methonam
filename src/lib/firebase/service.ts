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
    await addDoc(collection(db, "users"), data).then(() => {
      callback({ status: true, data: data });
    });
  }
}
