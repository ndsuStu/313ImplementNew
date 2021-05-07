import { Component, OnInit } from '@angular/core';
import { ViewControlService } from './view-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  datesVar: number = 0;
  datesArray: number[] = [];

  ngOnInit(){
    this.createDates()
  }

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

  createDates(){
  for (this.datesVar = 1; this.datesVar < 31; this.datesVar++) {
    this.datesArray.push(this.datesVar);
    }
  }

  }

