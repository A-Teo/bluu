import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const Flickity: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

  slides: string[] = [
    "./assets/img/theme/slide_1.jpg",
    "https://picsum.photos/id/1042/1368/504",
    "https://picsum.photos/id/1044/1368/504",
    "https://picsum.photos/id/1051/1368/504",
    "https://picsum.photos/id/1055/1368/504",
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const flkty1 = new Flickity( '.banner-carousel', {
      "prevNextButtons": true,
      "pageDots": true, 
      "wrapAround": true,
      "imagesLoaded": true,
      "percentPosition": true,
      "autoPlay": true
    });
  }

}
