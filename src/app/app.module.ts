import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
 
import {AppComponent} from './app.component';
import {NgxTinySliderModule} from 'ngx-tiny-slider';
import { CoupleComponent } from './couple/couple.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
 
@NgModule({
  imports: [
    BrowserModule,
    NgxTinySliderModule
  ],
  declarations: [
    AppComponent,
    CoupleComponent,
    GalleryComponent,
    EventsComponent
  ],
  exports: [
    NgxTinySliderModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}