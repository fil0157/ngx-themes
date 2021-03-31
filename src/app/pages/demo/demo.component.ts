// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { NgxThemesService } from '@ngx-eco/ngx-themes';



@Component({
  selector: 'demo',
  templateUrl: './demo.component.pug',
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
    this.changeType = null;
  }

  openPopupColorPicker(changeType: 'color' | 'background') {
    if (this.changeType) {
      if (this.changeType !== changeType) {
        setTimeout(() => {
          this.changeType = changeType;
        }, 250);
      }
      this.closeAll();
    } else {
      this.changeType = changeType;
    }
  }

}
