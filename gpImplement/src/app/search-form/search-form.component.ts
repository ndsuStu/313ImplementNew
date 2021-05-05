import { Component, OnInit } from '@angular/core';
import { ConnectingService } from "./../connecting.service";
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  public isCollapsed = true;
  showOrHide1: boolean = false;
  showOrHide2: boolean = false;
  showOrHide3: boolean = false;
  showOrHide4: boolean = false;
  showOrHide5: boolean = false;
  onClick1() {
   this.showOrHide1 = true;
   this.showOrHide2 = false;
   this.showOrHide3 = false;
   this.showOrHide4 = false;
   this.showOrHide5 = false;
   this.acctService.statusEdited1.emit(this.showOrHide1);
   this.acctService.statusEdited2.emit(this.showOrHide2);
   this.acctService.statusEdited3.emit(this.showOrHide3);
   this.acctService.statusEdited4.emit(this.showOrHide4);
   this.acctService.statusEdited5.emit(this.showOrHide5);
  }
  onClick2() {
    this.showOrHide2 = true;
    this.showOrHide1 = false;
   this.showOrHide3 = false;
   this.showOrHide4 = false;
   this.showOrHide5 = false;
   this.acctService.statusEdited1.emit(this.showOrHide1);
   this.acctService.statusEdited2.emit(this.showOrHide2);
   this.acctService.statusEdited3.emit(this.showOrHide3);
   this.acctService.statusEdited4.emit(this.showOrHide4);
   this.acctService.statusEdited5.emit(this.showOrHide5);
  }
  onClick3() {
    this.showOrHide3 = true;
    this.showOrHide2 = false;
   this.showOrHide1 = false;
   this.showOrHide4 = false;
   this.showOrHide5 = false;
   this.acctService.statusEdited1.emit(this.showOrHide1);
   this.acctService.statusEdited2.emit(this.showOrHide2);
   this.acctService.statusEdited3.emit(this.showOrHide3);
   this.acctService.statusEdited4.emit(this.showOrHide4);
   this.acctService.statusEdited5.emit(this.showOrHide5);
  }
  onClick4() {
    this.showOrHide4 = true;
    this.showOrHide2 = false;
   this.showOrHide3 = false;
   this.showOrHide1 = false;
   this.showOrHide5 = false;
   this.acctService.statusEdited1.emit(this.showOrHide1);
   this.acctService.statusEdited2.emit(this.showOrHide2);
   this.acctService.statusEdited3.emit(this.showOrHide3);
   this.acctService.statusEdited4.emit(this.showOrHide4);
   this.acctService.statusEdited5.emit(this.showOrHide5);
  }
  onClick5() {
    this.showOrHide5 = true;
    this.showOrHide2 = false;
   this.showOrHide3 = false;
   this.showOrHide4 = false;
   this.showOrHide1 = false;
   this.acctService.statusEdited1.emit(this.showOrHide1);
   this.acctService.statusEdited2.emit(this.showOrHide2);
   this.acctService.statusEdited3.emit(this.showOrHide3);
   this.acctService.statusEdited4.emit(this.showOrHide4);
   this.acctService.statusEdited5.emit(this.showOrHide5);
  }
  constructor(private acctService: ConnectingService) { }

  ngOnInit(): void {
  }

}
