import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { Subject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestfirebaseService {

  db: Firestore;
  testColl: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    initializeApp(environment.firebase);
    this.db = getFirestore();
    this.testColl = collection(this.db, 'test');

    // Get Realtime Data
    onSnapshot(this.testColl, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    });
  }

  async getTests() {
    const snapshot = await getDocs(this.testColl);
    return snapshot;
  }

  async addTest(name: string, nachname: string, geburtstag: number) {
    await addDoc(this.testColl, {
      name,
      nachname,
      geburtstag
    });
    return;
  }
}
