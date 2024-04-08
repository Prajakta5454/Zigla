import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination,SwiperOptions} from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
imagePath: any = "assets/img/brand/"
  brands: any = [
  {"logo":"polygon.png","name":""},
  {"logo":"walmart.png","name":""},
  {"logo":"spacex.png","name":""},
  {"logo":"nasa.png","name":""},
  {"logo":"eth.png","name":""},
  {"logo":"jio.png","name":""}]

  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay:2000,
    },
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: { 320: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    960:{
      slidesPerView: 5,
      spaceBetween: 10
    }
  }}
  constructor() { }

  ngOnInit(): void {
  }

}
