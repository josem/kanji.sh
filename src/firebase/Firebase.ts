import app from 'firebase/app';
import 'firebase/app';
import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

class Firebase {
    analytics: firebase.analytics.Analytics | null;

    constructor() {
        if (process.env.NODE_ENV === "production") {
            app.initializeApp(firebaseConfig);
            this.analytics = app.analytics();
        } else {
            this.analytics = null;
        }
    }
}

export default Firebase;