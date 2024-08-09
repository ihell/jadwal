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
      x1: dok.data().x1,
      xi1: dok.data().xi1,
      xii1: dok.data().xii1,
      jam2: dok.data().jam2,
      x2: dok.data().x2,
      xi2: dok.data().xi2,
      xii2: dok.data().xii2,
      jam3: dok.data().jam3,
      x3: dok.data().x3,
      xi3: dok.data().xi3,
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

export async function ubahSenin(docId, jam1, x1, xi1,  xii1,  
                                       jam2, x2, xi2,  xii2,   
                                       jam3, x3, xi3, xii3
) {
  await updateDoc(doc(db, "senin", docId), {
    jam1: jam1,
    x1: x1,
    xi1: xi1,
    xii1: xii1,
    jam2: jam2,
    x2: x2,
    xi2: xi2,
    xii2: xii2,
    jam3: jam3,
    x3: x3,
    xi3: xi3,
    xii3: xii3
  });
}

//  ambil data
export async function ambilSenin(docId) {
  const docRef = await doc(db, "senin", docId);
  const docSnap = await getDoc(docRef);

  return await docSnap.data();
}