// Angular
import { Component, OnInit } from '@angular/core';

// App
import { Config } from 'src/app/core/configs/config';

// Project
import { NgxThemesService } from '@ngx-eco/ngx-themes';



@Component({
  selector: 'header',
  templateUrl: './header.component.pug',
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
