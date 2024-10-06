import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_ZbQvGoDWpq4x1Hvxw7vMyPKFumbLIfc",
  authDomain: "invoice-app-eff42.firebaseapp.com",
  projectId: "invoice-app-eff42",
  storageBucket: "invoice-app-eff42.appspot.com",
  messagingSenderId: "800198340036",
  appId: "1:800198340036:web:c56d09b71e32983c738891",
  measurementId: "G-W2E5V7STBB",
};

export const firebaseApp = initializeApp(firebaseConfig);
