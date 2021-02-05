import db from "../config/firebase";
import firebase from "firebase";

const StatusEnum = {
  added: 0,
  commited: 1,
  pushed: 2,
};
Object.freeze(StatusEnum);

const userId = "USERID";

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
    files.push(doc.id);
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
    pushes.push(doc.id);
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

// commit id가 없으면 에러가 납니다.
// commitId를 준 commit 이후에 한 커밋과 관련된 File, Commit, Push를 모두 없앱니다.
export const gitReset = async (commitId) => {
  const commitRef = await db.collection("Commit").doc(commitId).get();
  const commit = commitRef.data();
  console.log("@@@id: ", commitId);
  console.log("@@@ removing files & commits created after ", commit.created_at);
  commit.files.map(async (file) => {
    const fileId = file.id;
    await removeFileById(fileId);
  });

  const created_at = commit.created_at;
  const commitSnapshot = await db
    .collection("Commit")
    .where("created_at", ">", created_at)
    .get();

  commitSnapshot.forEach(async (doc) => {
    const ref = doc.ref;
    await ref.delete();
  });
  console.log("@@@ done.");
};

const removeFileById = async (fileId) => {
  try {
    await db.collection("File").doc(fileId).delete();
  } catch (e) {
    console.log("@@@ remove file by id err: ", e);
  }
};

export const gitLog = async () => {
  const querySnapshot = await db
    .collection("Commit")
    .where("creator", "==", userId)
    .orderBy("created_at", "desc")
    .get();

  let commits = [];

  querySnapshot.forEach((doc) => {
    let commit = doc.data();
    commit.id = doc.id;
    commits.push(commit);
  });

  return commits;
};

export const gitLogNotPushed = async () => {
  const querySnapshot = await db
    .collection("Commit")
    .where("creator", "==", userId)
    .where("is_pushed", "==", false)
    .orderBy("created_at", "desc")
    .get();

  let commits = [];

  querySnapshot.forEach((doc) => {
    let commit = doc.data();
    commit.id = doc.id;
    commits.push(commit);
  });

  return commits;
};
