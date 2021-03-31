// Angular
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.pug',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public readonly routerLinkActiveOptions = {exact: true};

  constructor() { }

  ngOnInit(): void {
  }

}