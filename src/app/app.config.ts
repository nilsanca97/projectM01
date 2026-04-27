import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({ 
      apiKey: "AIzaSyDna2PwBf9M9VXd4bsFeAl9bjtA4KQZIgg",
      authDomain: "projectm01-f4463.firebaseapp.com",
      projectId: "projectm01-f4463",
      storageBucket: "projectm01-f4463.firebasestorage.app",
      messagingSenderId: "505409425956",
      appId: "1:505409425956:web:f4b5d14b3931947163feb1",
      measurementId: "G-LJ6JKSF918"
    })),
    provideAuth(() => getAuth()),
  ],
};
