// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// App
import { popupColorPickerAnimation } from './popup-color-picker.animation';

// Project
import { NgxThemesService } from '@ngx-eco/ngx-themes';



@Component({
  selector: 'popup-color-picker',
  templateUrl: './popup-color-picker.component.pug',
  styleUrls: ['./popup-color-picker.component.scss'],
  animations: [
    popupColorPickerAnimation,
  ],
})
export class PopupColorPickerComponent implements OnInit {

  public previewStyle;

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
  ) {
    this.previewStyle = { background: this.color || this.initColor };
  }

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
