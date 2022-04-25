import { firebase, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  projectId: "locationblog-a7fe4",
  storageBucket: "locationblog-a7fe4.appspot.com",
  messagingSenderId: "211676917139",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-BN5V28XJ4E",
};

firebase.initializeApp(firebaseConfig);

chrome.runtime.onMessage.addListener((msg, sender, resp) => {
  if (msg.command == "fetch") {
    let domain = msg.data.domain;
    let enc_domain = btoa(domain);
    firebase
      .database()
      .ref("/domain/" + enc_domain)
      .once("value")
      .then(function (snapshot) {
        resp({
          type: "result",
          status: "success",
          data: snapshot.val(),
          request: msg,
        });
      });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", afterDOMLoaded);
  } else {
    afterDOMLoaded();
  }

  const afterDOMLoaded = () => {
    document.body.classList.add("VS");
  };
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
