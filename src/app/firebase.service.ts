import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { Subject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db: Firestore;
  leaderboardColl: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    initializeApp(environment.firebase);
    this.db = getFirestore();
    this.leaderboardColl = collection(this.db, 'leaderboard');

    // Get Realtime Data
    onSnapshot(this.leaderboardColl, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    });
  }

  async getLeaderboard() {
    const snapshot = await getDocs(this.leaderboardColl);
    return snapshot;
  }

  async addLeaderboard(name: string, score: number) {
    await addDoc(this.leaderboardColl, {
      name,
      score
    });
    return;
  }

  async deleteLeaderboard(docId: string) {
    const docRef = doc(this.db, 'leaderboard', docId)
    await deleteDoc(docRef);
    return;
  }

  async updateLeaderboard(docId: string, name: string, score: number) {
    const docRef = doc(this.db, 'leaderboard', docId);
    await updateDoc(docRef, { name, score })
    return;
  }
}
