import { initializeApp } from "firebase/app"

const firebaseProjectName = "";

const firebaseConfig = {
  apiKey: "",
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
  projectId: `${firebaseProjectName}`
};


const Firebase = initializeApp(firebaseConfig);

export default Firebase;
