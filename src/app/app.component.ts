import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(){
	  var config = {
	    apiKey: "AIzaSyA4xBPMz2Y-fjzr-jyTyyftw0aQxBvP-pA",
	    authDomain: "my-blog-722d5.firebaseapp.com",
	    databaseURL: "https://my-blog-722d5.firebaseio.com",
	    projectId: "my-blog-722d5",
	    storageBucket: "my-blog-722d5.appspot.com",
	    messagingSenderId: "820181431768"
	  };
	  firebase.initializeApp(config);
  	}
}
