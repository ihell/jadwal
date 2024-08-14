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

export async function ambilDaftarJadwal() {
  const refDokumen = collection(db, "jadwal");
  const kueri = query(refDokumen, orderBy("urutan"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      hari: dok.data().hari,
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

export function formatAngka(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export async function ubahJadwal(docId, jam1, x1, xi1, xii1,
  jam2, x2, xi2, xii2,
  jam3, x3, xi3, xii3
) {
  await updateDoc(doc(db, "jadwal", docId), {
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
export async function ambilJadwal(docId) {
  const docRef = await doc(db, "jadwal", docId);
  const docSnap = await getDoc(docRef);

  return await docSnap.data();
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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

export async function ubahGuru(docId, nama, pelajaran
) {
  await updateDoc(doc(db, "guru", docId), {
 nama: nama,
 pelajaran: pelajaran
  });
}

export async function ambilGuru(docId) {
  const docRef = await doc(db, "guru", docId);
  const docSnap = await getDoc(docRef);

  return await docSnap.data();
}

export async function hapusGuru(docId) {
  await deleteDoc(doc(db, "guru", docId));
}

export async function tambahGuru(nama, pelajaran) {
try {
const dokRef = await addDoc(collection(db, 'guru'), {
nama: nama,
pelajaran: pelajaran
});
console.log('berhasil menembah produk ' + dokRef.id);
} catch (e) {
console.log('gagal menambah produk ' + e);
}
}


export async function tambahJadwal(hari, urutan, jam1, jam2, jam3, x1, x2, x3,
                                                    xi1, xi2, xi3,
                                                    xii1, xii2, xii3
) {
  try {
    const dokRef = await addDoc(collection(db, 'jadwal'), {
      hari: hari,
      urutan: urutan,
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
    console.log('berhasil menembah produk ' + dokRef.id);
  } catch (e) {
    console.log('gagal menambah produk ' + e);
  }
}

export async function hapusJadwal(docId) {
  await deleteDoc(doc(db, "jadwal", docId));
}