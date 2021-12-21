import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Navlink } from './navlink';
import { NAVLINKS } from './mock-navlinks';
import { RIGHTLINKS } from './mock-rightlinks';

@Injectable({
  providedIn: 'root'
})
export class NavlinkService {

  constructor() { }

  getNavlinks(): Observable<Navlink[]> {
    const navlinks = of(NAVLINKS);
    return navlinks;
  }

  getRightlinks(): Observable<Navlink[]> {
    const rightlinks = of(RIGHTLINKS);
    return rightlinks;
  }
}
