import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { BrandComponent } from './brand/brand.component';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';
import { SwiperModule } from 'swiper/angular';
import { AgriFieldComponent } from './agri-field/agri-field.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    BrandComponent,
    AboutComponent,
    CounterComponent,
    AgriFieldComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class HomeModule { }
