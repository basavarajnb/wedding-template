import { Component, OnInit, OnDestroy } from '@angular/core';

import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';

import * as countdown from 'countdown';

declare var TweenMax;
declare var Back;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  tinySliderConfig: NgxTinySliderSettingsInterface;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  timerId;
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

    this.timerId =
      countdown(
        new Date('10 November 2019 04:00 UTC'),
        (ts) => {
          this.setTimer(ts);
        },
        countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

        TweenMax.fromTo(document.querySelector(".heart img"), .45, {
          scale: 1.4
      }, {
          repeatDelay: .5,
          scale: 1,
          repeat: -1,
          ease: Back.easeOut
      });
  }

  setTimer(ts: CountdownValues) {
    if (this.days !== ts.days) this.days = ts.days ;
    if (this.hours !== ts.hours) this.hours = ts.hours ;
    if (this.minutes !== ts.minutes) this.minutes = ts.minutes ;
    if (this.seconds !== ts.seconds) this.seconds = ts.seconds ;
  }

  ngOnDestroy(): void {
    window.clearInterval(this.timerId);
  }
}

export interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
