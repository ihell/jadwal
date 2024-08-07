import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8g6kCR8laDnH1YCF9cYVy10lF1y7s2i0",
  authDomain: "bakwan-jagung.firebaseapp.com",
  projectId: "bakwan-jagung",
  storageBucket: "bakwan-jagung.appspot.com",
  messagingSenderId: "710653450064",
  appId: "1:710653450064:web:5cbf9ff4240922b03ffe55",
  measurementId: "G-VBHD7G08PJ"
};

// ambil data untuk mapel
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarMapel() {
  const refDokumen = collection(db, "mapel");
  const kueri = query(refDokumen, orderBy("jam"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      jam: dok.data().jam,
      pelajaran: dok.data().pelajaran,
      guru: dok.data().guru,
      mp: dok.data().mp,

    });
  });



  return hasil;
}

// ambil data untuk guru
export async function ambilDaftarGuru() {
  const refDokumen = collection(db, "guru");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      nama: dok.data().nama,
      pelajaran: dok.data().pelajaran,
      
    });
  });



  return hasil;
}

export function formatAngka(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  export async function ubahMapel(docId, jam, pelajaran, guru, mp) {
    await updateDoc(doc(db, "mapel", docId), {
      jam: jam,
      pelajaran: pelajaran,
      guru: guru,
      mp: mp
    });
  }

//  ambil data
export async function ambilMapel(docId) {
    const docRef = await doc(db, "mapel", docId);
    const docSnap = await getDoc(docRef);
  
    return await docSnap.data();
  }