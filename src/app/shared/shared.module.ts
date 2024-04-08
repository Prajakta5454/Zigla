import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    HeaderComponent,
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    NewsletterComponent,
    FooterComponent
  ]
})
export class SharedModule { }
