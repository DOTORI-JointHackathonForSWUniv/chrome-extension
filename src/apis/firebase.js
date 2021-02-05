import db from "../config/firebase.js";

export const getTestData = async () => {
  let newData = [];
  const querySnapshot = await db.collection("test-collection").get();

  querySnapshot.forEach((doc) => {
    const value = doc.data().value ?? doc.data().dotori;
    const id = doc.id;
    newData.push({ value: value, id: id });
  });

  return newData;
};
