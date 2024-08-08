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

// ambil data untuk mapel hari senin
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarSenin() {
  const refDokumen = collection(db, "senin");
  const kueri = query(refDokumen, orderBy("jam1"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      jam1: dok.data().jam1,
      jam2: dok.data().jam2,
      jam3: dok.data().jam3,
      x1: dok.data().x1,
      x2: dok.data().x2,
      x3: dok.data().x3,
      xi1: dok.data().xi1,
      xi2: dok.data().xi2,
      xi3: dok.data().xi3,
      xii1: dok.data().xii1,
      xii2: dok.data().xii2,
      xii3: dok.data().xii3
    });
  });
  return hasil;
}

// ambil data mapel hari selasa
export async function ambilDaftarSelasa() {
  const refDokumen = collection(db, "selasa");
  const kueri = query(refDokumen, orderBy("jam1"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      jam1: dok.data().jam1,
      jam2: dok.data().jam2,
      jam3: dok.data().jam3,
      jam4: dok.data().jam4,
      x1: dok.data().x1,
      x2: dok.data().x2,
      x3: dok.data().x3,
      x4: dok.data().x4,
      xi1: dok.data().xi1,
      xi2: dok.data().xi2,
      xi3: dok.data().xi3,
      xi4: dok.data().xi4,
      xii1: dok.data().xii1,
      xii2: dok.data().xii2,
      xii3: dok.data().xii3,
      xii4: dok.data().xii4
    });
  });
  return hasil;
}

// ambil data mapel hari rabu
export async function ambilDaftarRabu() {
  const refDokumen = collection(db, "rabu");
  const kueri = query(refDokumen, orderBy("jam1"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      jam1: dok.data().jam1,
      jam2: dok.data().jam2,
      jam3: dok.data().jam3,
      jam4: dok.data().jam4,
      x1: dok.data().x1,
      x2: dok.data().x2,
      x3: dok.data().x3,
      x4: dok.data().x4,
      xi1: dok.data().xi1,
      xi2: dok.data().xi2,
      xi3: dok.data().xi3,
      xi4: dok.data().xi4,
      xii1: dok.data().xii1,
      xii2: dok.data().xii2,
      xii3: dok.data().xii3,
      xii4: dok.data().xii4
    });
  });
  return hasil;
}

// ambil data mapel hari kamis
export async function ambilDaftarKamis() {
  const refDokumen = collection(db, "kamis");
  const kueri = query(refDokumen, orderBy("jam1"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      jam1: dok.data().jam1,
      jam2: dok.data().jam2,
      jam3: dok.data().jam3,
      jam4: dok.data().jam4,
      x1: dok.data().x1,
      x2: dok.data().x2,
      x3: dok.data().x3,
      x4: dok.data().x4,
      xi1: dok.data().xi1,
      xi2: dok.data().xi2,
      xi3: dok.data().xi3,
      xi4: dok.data().xi4,
      xii1: dok.data().xii1,
      xii2: dok.data().xii2,
      xii3: dok.data().xii3,
      xii4: dok.data().xii4
    });
  });
  return hasil;
}

// ambil data mapel hari jumat
export async function ambilDaftarJumat() {
  const refDokumen = collection(db, "jumat");
  const kueri = query(refDokumen, orderBy("jam1"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      jam1: dok.data().jam1,
      jam2: dok.data().jam2,
      jam3: dok.data().jam3,
      x1: dok.data().x1,
      x2: dok.data().x2,
      x3: dok.data().x3,
      xi1: dok.data().xi1,
      xi2: dok.data().xi2,
      xi3: dok.data().xi3,
      xii1: dok.data().xii1,
      xii2: dok.data().xii2,
      xii3: dok.data().xii3
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