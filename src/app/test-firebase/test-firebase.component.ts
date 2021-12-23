import { TestfirebaseService } from './../testfirebase.service';
import { Component, OnInit } from '@angular/core';
import { DocumentData, QuerySnapshot } from '@firebase/firestore';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-test-firebase',
  templateUrl: './test-firebase.component.html',
  styleUrls: ['./test-firebase.component.scss'],
})
export class TestFirebaseComponent implements OnInit {
  testDetails = {
    name: '',
    nachname: '',
    geburtstag: 0,
  };
  testCollectiondata:
    | {
        id: string;
        name: string;
        nachname: string;
        geburtstag: number;
      }[]
    | any = [];

  constructor(private testFirebaseService: TestfirebaseService) {}

  ngOnInit(): void {
    this.get();
    this.testFirebaseService.obsr_UpdatedSnapshot.subscribe((snapshot) => {
      this.updateTestCollection(snapshot);
    });
  }

  async get() {
    const snapshot = await this.testFirebaseService.getTests();
    this.updateTestCollection(snapshot);
  }

  updateTestCollection(snapshot: QuerySnapshot<DocumentData>) {
    this.testCollectiondata = [];
    snapshot.docs.forEach((test) => {
      this.testCollectiondata.push({ ...test.data(), id: test.id });
      console.log(test.data());
    });
  }

  async add() {
    const { name, nachname, geburtstag } = this.testDetails;
    await this.testFirebaseService.addTest(name, nachname, geburtstag);
    this.testDetails.name = '';
    this.testDetails.nachname = '';
    this.testDetails.geburtstag = 0;
  }
}
