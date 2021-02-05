import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_c8eCmsNsde6N7CCACXxpRpBnsw2gSjU",
  authDomain: "dotori-sw-hackerton.firebaseapp.com",
  projectId: "dotori-sw-hackerton",
  storageBucket: "dotori-sw-hackerton.appspot.com",
  messagingSenderId: "807484776999",
  appId: "1:807484776999:web:f8b6222ba3c65ac073a402",
  measurementId: "G-GMVNW3HC70",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = firebase.firestore();

export default db;
