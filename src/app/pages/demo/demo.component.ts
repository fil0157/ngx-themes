// Angular
import { Component, DoCheck, OnInit } from '@angular/core';

// Project
import { NgxThemesService } from '@fil0157/ngx-themes';



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, DoCheck {

  public color: string;
  public bgColor: string;

  constructor(
    public themes: NgxThemesService,
  ) { }

  ngOnInit(): void {
    this.color = this.themes.getTheme('customTheme').values['--color'];
    this.bgColor = this.themes.getTheme('customTheme').values['--background'];
  }

  ngDoCheck() {
    this.themes.updateTheme('customTheme', {
      '--color': this.color,
      '--background': this.bgColor
    })
  }

}
