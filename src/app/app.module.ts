import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireFunctionsModule, ORIGIN} from '@angular/fire/functions';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {WizardModule} from './wizard/wizard.module';
import {PreviewModule} from './preview/preview.module';
import {HttpClientModule} from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyC8WFHBxe-3HZCzTXV_TBFYja3nOwBYXZM",
  authDomain: "weatherpage-9f37e.firebaseapp.com",
  databaseURL: "https://weatherpage-9f37e.firebaseio.com",
  projectId: "weatherpage-9f37e",
  storageBucket: "weatherpage-9f37e.appspot.com",
  messagingSenderId: "144300370374",
  appId: "1:144300370374:web:5941f42165f73b020c2ac7"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    WizardModule,
    PreviewModule,
    HttpClientModule
],
  providers: [
     { provide: ORIGIN, useValue: 'https://us-central1-weather-page-b85fd.cloudfunctions.net' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
