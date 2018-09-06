import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ElementRef, Renderer2 } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('hook', { read: ViewContainerRef }) hook: ViewContainerRef;
  @ViewChild('popholder') popholder: ElementRef;
  popupRef:any;


  constructor(private resolver: ComponentFactoryResolver, private ren: Renderer2) { }

  ngOnInit() {
  }

  public showLoginPrompt() {
    this.ren.setStyle(this.popholder.nativeElement, 'display', 'block');
    this.popupRef = this.hook.createComponent(this.resolver.resolveComponentFactory(LoginComponent));
    setTimeout(()=>{
      this.popupRef.destroy();
      this.ren.setStyle(this.popholder.nativeElement, 'display', 'none');
    },2000);
  }

}
