import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-yoW-QZynVqiSr5BM4dwGEhNjUDR3inE",
  authDomain: "dotori-41ba8.firebaseapp.com",
  projectId: "dotori-41ba8",
  storageBucket: "dotori-41ba8.appspot.com",
  messagingSenderId: "594001440988",
  appId: "1:594001440988:web:79a65cb2a6b4a1c1af8419",
  measurementId: "G-0V35T5BELS",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = firebase.firestore();

export default db;
