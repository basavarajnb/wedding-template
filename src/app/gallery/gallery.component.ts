import { Component, OnInit } from '@angular/core';
import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';

declare var $;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  tinySliderConfig: NgxTinySliderSettingsInterface;
  numbers = Array.from(Array(5), (x, i) => ++i);
  constructor() { }

  ngOnInit() {
    this.tinySliderConfig = {
      "items": 3,
      nav: false,
      "speed": 300,
      "autoplay": true,
      "autoplayTimeout": 3500,
      "swipeAngle": false,
      gutter: 10,
    };

    // this.tinySliderConfig = {
    //   gutter: 10,
    //   mode: 'gallery',
    //   items: 1,
    //   controls: false,
    //   nav: false,
    //   speed: 1000,
    //   autoplay: true,
    //   animateIn: 'tns-fadeIn',
    //   animateOut: 'tns-fadeOut',
    //   animateDelay: 1000
    // }

    this.setGallery();
  }

  setGallery() {

    if (window.screen.width > 768) {

      $("#nanogallery2").nanogallery2({
        // ### gallery settings ### 
        itemsBaseURL: 'assets/images/gallery/',

        // ### gallery content ### 
        items: [
          { srct: 'g1t.jpg', src: 'g1.jpg', title: ' 1' },
          { srct: 'g1-1t.jpg', src: 'g1-1.jpg', title: ' 111' },
          { srct: 'g1-2t.jpg', src: 'g1-2.jpg', title: ' 1-2' },
          { srct: 'g2t.jpg', src: 'g2.jpg', title: ' 2' },
          { srct: 'g2-1t.jpg', src: 'g2-1.jpg', title: ' 2-1' },
          { srct: 'g2-2t.jpg', src: 'g2-2.jpg', title: ' 2-2' },
          { srct: 'g2-3t.jpg', src: 'g2-3.jpg', title: ' 2-3' },
          { srct: 'g2-4t.jpg', src: 'g2-4.jpg', title: ' 2-4' },
          { srct: 'g3t.jpg', src: 'g3.jpg', title: ' 3' },
          { srct: 'g4t.jpg', src: 'g4.jpg', title: ' 4' },
          { srct: 'g5t.jpg', src: 'g5.jpg', title: ' 5' },
          { srct: 'g6t.jpg', src: 'g6.jpg', title: ' 6' },
          { srct: 'g7t.jpg', src: 'g7.jpg', title: ' 7' },
          { srct: 'g8t.jpg', src: 'g8.jpg', title: ' 8' },
          { srct: 'g9t.jpg', src: 'g9.jpg', title: ' 9' },
          { srct: 'g10t.jpg', src: 'g10.jpg', title: ' 10' },
          { srct: 'g11t.jpg', src: 'g11.jpg', title: ' 11' },
          { srct: 'g12t.jpg', src: 'g12.jpg', title: ' 12' },
          { srct: 'g13t.jpg', src: 'g13.jpg', title: ' 13' },
          { srct: 'g14t.jpg', src: 'g14.jpg', title: ' 14' },
          { srct: 'g15t.jpg', src: 'g15.jpg', title: ' 15' },
          { srct: 'g16t.jpg', src: 'g16.jpg', title: ' 16' },
        ],
        "thumbnailHeight": 200,
        "thumbnailWidth": 200,
        "galleryMosaic": [
          { "w": 5, "h": 3, "c": 2, "r": 1 },
          { "w": 2, "h": 2, "c": 1, "r": 2 },
          { "w": 2, "h": 2, "c": 7, "r": 2 },
          { "w": 2, "h": 2, "c": 2, "r": 4 },
          { "w": 3, "h": 4, "c": 4, "r": 4 },
          { "w": 3, "h": 4, "c": 7, "r": 4 },
          { "w": 2, "h": 2, "c": 10, "r": 5 },
          { "w": 4, "h": 2, "c": 11, "r": 6 }
        ],
        "thumbnailGutterWidth": 0,
        "thumbnailGutterHeight": 0,
        "thumbnailBorderHorizontal": 5,
        "thumbnailBorderVertical": 5,
        "galleryMaxRows": 1,
        "galleryDisplayMode": "pagination",
        "thumbnailLabel": { "display": false }
      });

    } else {
      $("#nanogallery2").nanogallery2({
        // ### gallery settings ### 
        "thumbnailHeight": 200,
        thumbnailWidth: 'auto',
        itemsBaseURL: 'assets/images/gallery/',
        thumbnailDisplayTransition: 'slideUp2',
        thumbnailDisplayTransitionDuration: 500,
        thumbnailDisplayInterval: 30,
        galleryDisplayTransition: 'rotateX',
        galleryDisplayTransitionDuration: 500,
        "galleryDisplayMode": "pagination",
        galleryPaginationMode: 'rectangles',
        galleryMaxRows: 4,
        galleryTheme: 'light',
        colorScheme: 'light',
        
        "thumbnailGutterWidth": 0,
        "thumbnailGutterHeight": 0,
        "thumbnailLabel": { "display": false },
        // galleryMaxItems: 10,


        // ### gallery content ### 
        items: [
          { srct: 'g1t.jpg', src: 'g1.jpg', title: '' },
          { srct: 'g12t.jpg', src: 'g12.jpg', title: '' },
          { srct: 'g2t.jpg', src: 'g2.jpg', title: '' },
          { srct: 'g13t.jpg', src: 'g13.jpg', title: '' },
          { srct: 'g3t.jpg', src: 'g3.jpg', title: '' },
          { srct: 'g15t.jpg', src: 'g15.jpg', title: '' },
          { srct: 'g4t.jpg', src: 'g4.jpg', title: '' },
          { srct: 'g5t.jpg', src: 'g5.jpg', title: '' },
          { srct: 'g11t.jpg', src: 'g11.jpg', title: '' },
          { srct: 'g6t.jpg', src: 'g6.jpg', title: '' },
          { srct: 'g7t.jpg', src: 'g7.jpg', title: '' },
          { srct: 'g8t.jpg', src: 'g8.jpg', title: '' },
          { srct: 'g14t.jpg', src: 'g14.jpg', title: '' },
          { srct: 'g16t.jpg', src: 'g16.jpg', title: '' },
          { srct: 'g9t.jpg', src: 'g9.jpg', title: '' },
          { srct: 'g10t.jpg', src: 'g10.jpg', title: '' },
        ],
      });
    }
  }

}
