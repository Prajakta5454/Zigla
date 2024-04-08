import { ChangeDetectorRef, Component, ElementRef, HostListener,AfterViewInit, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit,AfterViewInit {
  private observer!: IntersectionObserver;
  @HostListener('window:scroll') onScroll(e: Event): void {
    this.scrollVideo();
 }
  constructor(private el: ElementRef,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    // window.addEventListener('scroll', () => {  
    //   this.scrollVideo();
    // });
  }
  ngAfterViewInit() {
    // this.isVisibleInView = true
    this.observer = new IntersectionObserver( entries => { 
      if ( entries[0].isIntersecting === true ) {
        // this.isVisibleInView = false;
        // this.animatedDigitComponent.animateCount();
        // this.countryMapComponent.change();
        // Probably needs to be called in production
        //
        console.log("works here");
        
        this.observer.disconnect();
      } 
      else if((entries[0].isIntersecting === false)){
        // Probably not interesting in production
        // but used for demo purposes
        //
        // this.isVisibleInView = true;
      }
    }, {
      threshold: 0.10
    });
    this.observer.observe(this.el.nativeElement as HTMLElement);
    this.cdr.detectChanges();
  }
  scrollVideo() {
    var video = $('#video').get(0),
      videoLength = video.duration,
      scrollPosition = $(document).scrollTop();
    
    video.currentTime = (scrollPosition / ($(document).height() - $(window).height())) * videoLength;
  }
  
  // $(window).scroll(function(e) {
  //   this.scrollVideo();
  // });
}
