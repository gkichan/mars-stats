import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  updateDoc,
  doc
} from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
    this.init();
  }

  async init() {
    const firebaseConfig = {
      apiKey: "AIzaSyCUV9Shga_t2pVqAssCTfnaERWV4XVSLBo",
      authDomain: "mars-stats.firebaseapp.com",
      projectId: "mars-stats",
      storageBucket: "mars-stats.appspot.com",
      messagingSenderId: "352749834245",
      appId: "1:352749834245:web:350c1da0aa8ac425680c6c"
    };

    const app = initializeApp(firebaseConfig);

    console.log(app);
    const firestore = getFirestore(app);
    const docRef = doc(firestore, 'games/list');
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
    // await updateDoc(docRef, "field", 'value');
  }
}
