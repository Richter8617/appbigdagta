import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_cn364Sre7UBLx2-oqErAvjQn-o7Y6Xo",
  authDomain: "appbigdata-5c9c8.firebaseapp.com",
  projectId: "appbigdata-5c9c8",
  storageBucket: "appbigdata-5c9c8.appspot.com",
  messagingSenderId: "280673895631",
  appId: "1:280673895631:web:f78288e1b00497b80c23ba",
  measurementId: "G-K3ZGKCTVCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
