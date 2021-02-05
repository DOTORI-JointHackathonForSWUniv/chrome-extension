import db from "../config/firebase.js";
import firebase from "firebase";

const StatusEnum = {
  added: 0,
  commited: 1,
  pushed: 2,
};
Object.freeze(StatusEnum);

const userId = "jSUP3XUfwgLHv6DmOeiP";

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

// is_public은 boolean type으로 주세요!
export const gitAdd = async (code) => {
  const creator = userId;
  const created_at = firebase.firestore.FieldValue.serverTimestamp();
  const status = StatusEnum.added;

  const newFile = {
    creator: creator,
    code: code,
    created_at: created_at,
    status: status,
    is_public: true,
  };

  try {
    const ref = await db.collection("File").add(newFile);
    console.log("@@@ new file added: ", ref.id);
  } catch (e) {
    console.log("@@@ firebase git add function err: ", e);
  }
};

export const gitCommit = async (name) => {
  const creator = userId;
  const created_at = firebase.firestore.FieldValue.serverTimestamp();
  const files = await getAddedFiles();

  const commit = {
    creator: creator,
    files: files,
    created_at: created_at,
    name: name,
    is_pushed: false,
  };

  try {
    await addCommitDoc(commit);
    modifyFileStatusToCommited();
  } catch (e) {
    console.log("@@@ firebase git commit err: ", e);
  }
};

const getAddedFiles = async () => {
  let files = [];

  const querySnapshot = await db
    .collection("File")
    .where("creator", "==", userId)
    .where("status", "==", StatusEnum.added)
    .get();

  querySnapshot.forEach((doc) => {
    files.push(doc.data());
  });

  return files;
};

const addCommitDoc = async (commit) => {
  try {
    const ref = await db.collection("Commit").add(commit);
    console.log("@@@ new commit added: ", ref.id);
  } catch (e) {
    console.log("@@@ firebase git add function err: ", e);
  }
};

const modifyFileStatusToCommited = async () => {
  const querySnapshot = await db
    .collection("File")
    .where("creator", "==", userId)
    .where("status", "==", StatusEnum.added)
    .get();

  return querySnapshot.forEach(async (doc) => {
    const ref = doc.ref;
    await ref.update({ status: StatusEnum.commited });
  });
};

export const gitPush = async () => {
  const creator = userId;
  const created_at = firebase.firestore.FieldValue.serverTimestamp();
  const commits = await getUnpushedCommits();

  const push = {
    creator: creator,
    commits: commits,
    created_at: created_at,
  };

  try {
    await addPushDoc(push);
    await modifyFileStatusToPushed();
    modifyCommitStatusToPushed();
  } catch (e) {
    console.log("@@@ firebase git push err: ", e);
  }
};

const getUnpushedCommits = async () => {
  let pushes = [];

  const querySnapshot = await db
    .collection("Commit")
    .where("creator", "==", userId)
    .where("is_pushed", "==", false)
    .get();

  querySnapshot.forEach((doc) => {
    pushes.push(doc.data());
  });

  return pushes;
};

const addPushDoc = async (push) => {
  try {
    const ref = await db.collection("Push").add(push);
    console.log("@@@ new push added: ", ref.id);
  } catch (e) {
    console.log("@@@ firebase git add function err: ", e);
  }
};

const modifyFileStatusToPushed = async () => {
  const querySnapshot = await db
    .collection("File")
    .where("creator", "==", userId)
    .where("status", "==", StatusEnum.commited)
    .get();

  return querySnapshot.forEach(async (doc) => {
    const ref = doc.ref;
    await ref.update({ status: StatusEnum.pushed });
  });
};

const modifyCommitStatusToPushed = async () => {
  const querySnapshot = await db
    .collection("Commit")
    .where("creator", "==", userId)
    .where("is_pushed", "==", false)
    .get();

  return querySnapshot.forEach(async (doc) => {
    const ref = doc.ref;
    await ref.update({ is_pushed: true });
  });
};
