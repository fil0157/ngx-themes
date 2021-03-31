// Angulur
import { Component, OnInit } from '@angular/core';

// App
import { Config } from 'src/app/core/configs/config';



@Component({
  selector: 'footer',
  templateUrl: './footer.component.pug',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public config;
  public readonly thisYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    this.config = Config;
  }

}
