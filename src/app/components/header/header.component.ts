// Angular
import { Component, OnInit } from '@angular/core';

// App
import { Config } from 'src/app/config';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public config;

  constructor() { }

  ngOnInit(): void {
    this.config = Config
  }

}
