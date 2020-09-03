// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { NgxThemesService } from '@fil0157/ngx-themes';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public ngxThemes: NgxThemesService,
  ) { }

  ngOnInit(): void {
  }

}
