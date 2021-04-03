import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwv-Asr13zHYFp7odByUHbUKi8i9Csv20",
  authDomain: "my-interview-prep.firebaseapp.com",
  projectId: "my-interview-prep",
  storageBucket: "my-interview-prep.appspot.com",
  messagingSenderId: "164995617128",
  appId: "1:164995617128:web:36fbb5e7976ee45d41c6dd",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = db.collection(collectionKey);
  const batch = db.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, problems } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      problems,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export { db, addCollectionsAndDocuments, convertCollectionsSnapshotToMap };
