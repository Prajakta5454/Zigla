import { Component, OnInit,AfterViewInit,ElementRef,Renderer2,ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class BannerComponent implements OnInit,AfterViewInit {

  @ViewChild("textElement") textElement: ElementRef;
  @ViewChild("blinkElement") blinkElement: ElementRef;
  wordArray: string[] = [
    'Pre-harvest',
    'Post-harvest',
    'Agri supply chain',
    'Agri lending',
    'SMEs',
    'FPOs',
    'Warehousing',
    'Food processing'
  ];
  typingSpeedMilliseconds = 100;
  deleteSpeedMilliseconds = 100;
  private i = 0;
  constructor(private renderer: Renderer2) { }
 bannerTitle = 'Transforming the future of\n';
 bannerDescription = `New generation of product suite for agriculture powered by web3`;
//  width: any
 windowHeight: any = 730;
 onWindowResize(event) {
  // this.width = event.target.innerWidth;
  // this.windowHeight = event.target.innerHeight;
  // console.log("height",this.windowHeight, event);
  
  // this.mobileBanner(this.width)
}
  ngOnInit(): void {
    // console.log("Height",this.windowHeight);   
  }

  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
  }

  private initVariables(): void {
    // this.renderer.setStyle(
    //   this.textElement.nativeElement,
    //   "color",
    //   this.textColor
    // );
    // this.renderer.setStyle(
    //   this.textElement.nativeElement,
    //   "font-size",
    //   this.fontSize
    // );
    this.renderer.setStyle(this.textElement.nativeElement, "padding", "0.01em");

    // this.renderer.setStyle(
    //   this.blinkElement.nativeElement,
    //   "border-right-width",
    //   this.blinkWidth
    // );
    // this.renderer.setStyle(
    //   this.blinkElement.nativeElement,
    //   "border-right-color",
    //   this.textColor
    // );
    // this.renderer.setStyle(
    //   this.blinkElement.nativeElement,
    //   "font-size",
    //   this.fontSize
    // );
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        setTimeout(()=>{ this.deletingEffect(); }, 1500)
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join("");
      } else {
        if (this.wordArray.length > this.i + 1) {
          this.i++;
        } else {
          this.i = 0;
        }
        this.typingEffect();
        return false;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
    };
    loopDeleting();
  }
}
