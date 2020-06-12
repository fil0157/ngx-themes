// Angular
import { Component } from '@angular/core';

// Project
import { NgxThemesService } from '@fil0157/ngx-themes';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private themes: NgxThemesService,
  ) { }


  chengeTheme(name) {
    this.themes.useTheme(name);

    this.themes.log();
  }


  toggleTheme(): void {
    this.themes.toggleTheme();

    this.themes.log();
  }


  clickDefaultTheme() {
    this.themes.useDefaultTheme();

    this.themes.log();
  }


  clickRemoveTheme() {
    this.themes.removeTheme('darkTheme');

    this.themes.log();
  }


}
