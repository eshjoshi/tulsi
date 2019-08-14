import { Injectable } from '@angular/core';
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //user:  User;
  constructor(private afAuth: AngularFireAuth) { }
  login(){
    console.log('redirecting to google');
    this.afAuth.auth.signInWithRedirect( new auth.GoogleAuthProvider());
  }
  logout(){
   this.afAuth.auth.signOut(); 
  }
  getLoggedInUser(){
    return this.afAuth.authState;
  }
  
 }
