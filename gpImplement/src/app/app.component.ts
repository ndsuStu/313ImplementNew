import { Component } from '@angular/core';
import { ViewControlService } from './view-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public viewControl: ViewControlService){  }

  setViewCust(){
    this.viewControl.changeViewTo("custPage");
  }

  setViewGenInfo(){
    this.viewControl.changeViewTo("genInfo");
  }

  setViewCreateCust(){
    this.viewControl.changeViewTo("createCust");
  }

  setViewEmp(){
    this.viewControl.changeViewTo("empPage");
  }
}
