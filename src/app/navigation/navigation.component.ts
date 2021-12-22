import { Navlink } from './../navlink';
import { Component, OnInit } from '@angular/core';

import { NavlinkService } from '../navlink.service';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navlinks: Navlink[] = [];
  rightlinks: Navlink[] = [];
  faHome = faHome;

  constructor(private navlinkService: NavlinkService) { }

  ngOnInit(): void {
    this.getNavlinks();
    this.getRightlinks();
  }

  getNavlinks(): void {
    this.navlinkService.getNavlinks()
      .subscribe(navlinks => this.navlinks = navlinks);
  }

  getRightlinks(): void {
    this.navlinkService.getRightlinks()
      .subscribe(rightlinks => this.rightlinks = rightlinks);
  }

}
