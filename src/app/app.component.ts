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
  }


  toggleTheme(): void {
    this.themes.toggleTheme();
  }


  clickDefaultTheme() {
    this.themes.useDefaultTheme();
  }


  clickRemoveTheme() {
    this.themes.removeTheme('darkTheme');
  }


}
