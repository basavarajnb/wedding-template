import { Component, OnInit } from '@angular/core';

import {NgxTinySliderSettingsInterface} from 'ngx-tiny-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tinySliderConfig: NgxTinySliderSettingsInterface;
   
  ngOnInit() {
    this.tinySliderConfig = {
      gutter: 10,
      mode: 'gallery',
      items: 1,
      controls: false,
      nav: false,
      speed: 1000,
      autoplay: true,
      animateIn: 'tns-fadeIn',
      animateOut: 'tns-fadeOut',
      animateDelay: 1000
    };
  }
}
