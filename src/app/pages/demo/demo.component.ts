// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { NgxThemesService } from '@fil0157/ngx-themes';



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public changeType: 'color' | 'background';

  constructor(
    public themes: NgxThemesService,
  ) { }

  ngOnInit(): void {
  }

  closeAll() {
    this.changeType = null
  }

}
