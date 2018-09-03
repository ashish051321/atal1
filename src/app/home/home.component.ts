import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('hook', { read: ViewContainerRef }) popholder: ViewContainerRef;
  @ViewChild('popholderav', { read: ViewContainerRef }) popholder: ViewContainerRef;


  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  public showLoginPrompt(){

    this.popholder.createComponent(this.resolver.resolveComponentFactory(LoginComponent));
  }

}
