// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// App
import { popupColorPickerAnimation } from './popup-color-picker.animation';

// Project
import { NgxThemesService } from '@fil0157/ngx-themes';



@Component({
  selector: 'app-popup-color-picker',
  templateUrl: './popup-color-picker.component.html',
  styleUrls: ['./popup-color-picker.component.scss'],
  animations: [
    popupColorPickerAnimation,
  ],
})
export class PopupColorPickerComponent implements OnInit {

  private _changeType: 'color' | 'background';

  @Input() public set changeType(changeType: 'color' | 'background') {
    this._changeType = changeType;
    this.initColor = this.themes.getTheme('customTheme').values['--' + this.changeType];
  }

  public get changeType(): 'color' | 'background' {
    return this._changeType;
  }

  public initColor: string;
  public color: string;

  constructor(
    private themes: NgxThemesService
  ) { }

  ngOnInit(): void {
  }

  @Output() onClose = new EventEmitter();

  changeColor(value: string): void {
    this.color = value;
  }

  close(): void {
    this.onClose.emit();
  }

  apply(): void {
    this.close();
    this.themes.updateThemeProperty('customTheme', '--' + this.changeType, this.color);
  }

}
