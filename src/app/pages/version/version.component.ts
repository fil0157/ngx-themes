// Angular
import { Component, OnInit } from '@angular/core';

// App
import { Config } from 'src/app/config';



@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  public config;

  constructor() { }

  ngOnInit(): void {
    this.config = Config;
  }

}
