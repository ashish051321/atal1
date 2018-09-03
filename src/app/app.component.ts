import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



declare var Croppie: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atal1';
  vanilla: any;
  imageData: any;

  @ViewChild('imageholder') imageholder: ElementRef;
  @ViewChild('resultdiv') resultdiv: ElementRef;



  constructor(private sanitizer: DomSanitizer) {
  }


  ngOnInit() {
    setTimeout(() => {
      this.vanilla = new Croppie(this.imageholder.nativeElement, {
        viewport: { width: 100, height: 100 },
        boundary: { width: 500, height: 500 },
        showZoomer: true,
        enableResize: true,
        enableOrientation: true
      });

      this.vanilla.bind({
        url: 'assets/img/LP700.jpg',
        orientation: 1
      });
      //on button click


    }, 2000);
  }

  public getCrop() {
    this.vanilla.result('blob').then( (blob) => {

      let urlCreator = window.URL;
      console.log(urlCreator);
      this.imageData = this.sanitizer.bypassSecurityTrustUrl(
        urlCreator.createObjectURL(blob));

    });

  }



}
