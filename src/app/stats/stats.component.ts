import { Component, OnInit } from '@angular/core';
import { DocumentData, QuerySnapshot } from 'rxfire/firestore/interfaces';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  leaderboardCollectiondata:
    | {
        id: string;
        name: string;
        score: number;
      }[]
    | any = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.get();
    this.firebaseService.obsr_UpdatedSnapshot.subscribe((snapshot) =>
      this.updateLeaderboardCollection(snapshot));
  }

  async get() {
    const snapshot = await this.firebaseService.getLeaderboard();
    this.updateLeaderboardCollection(snapshot);
  }

  updateLeaderboardCollection(snapshot: QuerySnapshot<DocumentData>) {
    this.leaderboardCollectiondata = [];
    snapshot.docs.forEach((leaderboard) => {
      this.leaderboardCollectiondata.push({ ...leaderboard.data(), id: leaderboard.id });
    });
  }
}
