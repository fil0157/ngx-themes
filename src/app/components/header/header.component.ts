// Angular
import { Component, OnInit } from '@angular/core';

// App
import { Config } from 'src/app/config';

// Project
import { NgxThemesService } from '@fil0157/ngx-themes';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public config;

  constructor(
    public themes: NgxThemesService
  ) { }

  ngOnInit(): void {
    this.config = Config;
  }

}
