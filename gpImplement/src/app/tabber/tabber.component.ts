import { Component, OnInit } from '@angular/core';
import { ConnectingService } from "./../connecting.service";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {ViewControlService} from './../view-control.service';
import {AccountService} from "./../account.service";
// import { LoggingService } from "./../logging.service";

export interface Tile {
  
  cols: number;
  rows: number;
  text: string;
  color: string;
}

@Component({
  selector: 'app-tabber',
  templateUrl: './tabber.component.html',
  styleUrls: ['./tabber.component.css']
})
export class TabberComponent implements OnInit {
  
  showOrHide1: boolean = true;
  showOrHide2: boolean = false;
  showOrHide3: boolean = false;
  showOrHide4: boolean = false;
  showOrHide5: boolean = false;
  editBool: boolean = true;

  p1: boolean = true;
  p2: boolean = true;
  p3: boolean = true;
  p4: boolean = true;
  p5: boolean = true;
  p6: boolean = true;
  p7: boolean = true;

  b1: boolean = true;
  b2: boolean = true;
  b3: boolean = true;
  b4: boolean = true;
  b5: boolean = true;

  card1: boolean = true;
  card2: boolean = true;
  card3: boolean = true;
  card4: boolean = true;
  card5: boolean = true;

  c1Name: string = "";
  c1Job: string = "";
  c1Desc: string = "";
  c1Photo: string = "";

  c2Name: string = "";
  c2Job: string = "";
  c2Desc: string = "";
  c2Photo: string = "";
  
  c3Name: string = "";
  c3Job: string = "";
  c3Desc: string = "";
  c3Photo: string = "";
  
  c4Name: string = "";
  c4Job: string = "";
  c4Desc: string = "";
  c4Photo: string = "";

  c5Name: string = "";
  c5Job: string = "";
  c5Desc: string = "";
  c5Photo: string = "";

  c6Name: string = "";
  c6Job: string = "";
  c6Desc: string = "";
  c6Photo: string = "";

  c7Name: string = "";
  c7Job: string = "";
  c7Desc: string = "";
  c7Photo: string = "";

  titleInfo: string = "";
  advertisement1: string = "";
  advertisement2: string = "";
  advertisement3: string = "";
  helpInfo: string = "";
  closingStatement: string = "";
  info1z: string = "";
  NotAnEmitter: string = "We hear you on the stress of running your own business!";
  row2: string = "This software is intended to reduce the business and accounting work necessary to run a landscaping company.";
  row3: string = "A business can be forced to hire extra employees for accounting and business upkeep work.";
  row4: string = "Using this software, these repeated business management expenses can be avoided, thus leading to long-term savings for the company.";
  row5: string = "In addition, humans introduce the aptly named “human errors”, whereas in properly coded software.";
  row6: string = "Errors in the processing of this type of work are eliminated.";
  row7: string = "This can lead to saved time and money, as each error can lead to confusion and sometimes even legal troubles.";
  row8: string = "In addition, the system can have timing and/or requirements reminders, preventing late or overdue submissions of work!";
  info2: string = "";
  info3: string = "";
  announcement1: string = "";
  announcement2: string = "";
  isEmp: boolean = false;
  tiles: Tile[] = [
    { text: this.NotAnEmitter, cols: 1, rows: 1, color: 'red'},
    { text: this.row2, cols: 1, rows: 1 , color: 'red'},
    {
      text:
        this.row3,
      cols: 1,
      rows: 1, color: 'red'
    },
    {
      text:
        this.row4,
      cols: 1,
      rows: 1, color: 'red'
    },
    

    { text: "", cols: 1, rows: 1, color: 'red' },
    {
      text:
        "",
      cols: 1,
      rows: 1, color: 'red'
    },
    {
      text:
        "",
      cols: 1,
      rows: 1, color: 'red'
    },
    { text: "", cols: 1, rows: 1 , color: 'red'},

    { text: this.row5, cols: 1, rows: 1 , color: 'red'},
    { text: this.row6, cols: 1, rows: 1 , color: 'red'},
    { text: this.row7, cols: 1, rows: 1, color: 'red' },
    { text: this.row8, cols: 1, rows: 1 , color: 'red'}
  ];
  


  onClick1() {
   this.showOrHide1 = true;
   this.showOrHide2 = false;
   this.showOrHide3 = false;
   this.showOrHide4 = false;
   this.showOrHide5 = false;
  }
  onClick2() {
    this.showOrHide2 = true;
    this.showOrHide1 = false;
   this.showOrHide3 = false;
   this.showOrHide4 = false;
   this.showOrHide5 = false;
  }
  onClick3() {
    this.showOrHide3 = true;
    this.showOrHide2 = false;
   this.showOrHide1 = false;
   this.showOrHide4 = false;
   this.showOrHide5 = false;
  }
  onClick4() {
    this.showOrHide4 = true;
    this.showOrHide2 = false;
   this.showOrHide3 = false;
   this.showOrHide1 = false;
   this.showOrHide5 = false;
  }
  onClick5() {
    this.showOrHide5 = true;
    this.showOrHide2 = false;
   this.showOrHide3 = false;
   this.showOrHide4 = false;
   this.showOrHide1 = false;
  }

  add1() {
    this.acctService.c1Nameb.emit(this.c1Name);
    this.acctService.c1jobb.emit(this.c1Job);
    this.acctService.c1Photob.emit(this.c1Photo);
    this.acctService.c1descb.emit(this.c1Desc);
    this.acctService.photoB1.emit(this.b1);
    this.card1 = false;
  }

  add2() {
    this.acctService.c2Nameb.emit(this.c2Name);
    this.acctService.c2jobb.emit(this.c2Job);
    this.acctService.c2Photob.emit(this.c2Photo);
    this.acctService.c2descb.emit(this.c2Desc);
    this.acctService.photoB2.emit(this.b2);

    this.card2 = false;
  }

  add3() {
    this.acctService.c3Nameb.emit(this.c3Name);
    this.acctService.c3jobb.emit(this.c3Job);
    this.acctService.c3Photob.emit(this.c3Photo);
    this.acctService.c3descb.emit(this.c3Desc);
    this.acctService.photoB3.emit(this.b3);

    this.card3 = false;
  }

  add4() {
    this.acctService.c4Nameb.emit(this.c4Name);
    this.acctService.c4jobb.emit(this.c4Job);
    this.acctService.c4Photob.emit(this.c4Photo);
    this.acctService.c4descb.emit(this.c4Desc);
    this.acctService.photoB4.emit(this.b4);

    this.card4 = false;
  }

  add5() {
    this.acctService.c5Nameb.emit(this.c5Name);
    this.acctService.c5jobb.emit(this.c5Job);
    this.acctService.c5Photob.emit(this.c5Photo);
    this.acctService.c5descb.emit(this.c5Desc);
    this.acctService.photoB5.emit(this.b5);

    this.card5 = false;
  }

  del1() {
    this.card1 = false;
  }

  del2() {
    this.card2 = false;
  }

  del3() {
    this.card3 = false;
  }

  del4() {
    this.card4 = false;
  }

  del5() {
    this.card5 = false;
  }

  edit() {
    //
    this.acctService.editB.emit(this.editBool);
    this.acctService.titleInfo1b.emit(this.titleInfo);
    this.acctService.advertisement1b.emit(this.advertisement1);
    this.acctService.advertisement2b.emit(this.advertisement2);
    this.acctService.advertisement3b.emit(this.advertisement3);
    this.acctService.helpInfob.emit(this.helpInfo);
    this.acctService.info1b.emit(this.info1z);
  
    this.acctService.closingb.emit(this.closingStatement);
    this.acctService.info2b.emit(this.info2);
    this.acctService.info3b.emit(this.info3);
    this.acctService.announcement1b.emit(this.announcement1);
    this.acctService.announcement2b.emit(this.announcement2);
  }


  constructor(private acctService: ConnectingService, private accountService: AccountService, private viewControl: ViewControlService) { }
  //private logServe: LoggingService
  
  

  ngOnInit(): void {this.acctService.statusEdited1.subscribe(
    (id: boolean) => (this.showOrHide1 = id)
  );

  this.isEmp = this.AccountService.isEmployee;

  this.acctService.statusEdited2.subscribe(
    (id: boolean) => (this.showOrHide2 = id)
  );
  this.acctService.statusEdited3.subscribe(
    (id: boolean) => (this.showOrHide3 = id)
  );
  this.acctService.statusEdited4.subscribe(
    (id: boolean) => (this.showOrHide4 = id)
  );
  this.acctService.statusEdited5.subscribe(
    (id: boolean) => (this.showOrHide5 = id)
  );
  this.acctService.titleInfo1a.subscribe(
    (id: string) => (this.titleInfo = id)
  );
  this.acctService.advertisement1a.subscribe(
    (id: string) => (this.advertisement1 = id)
  );
  this.acctService.info1a.subscribe(
    (id: string) => (this.info1z = id)
  );
  this.acctService.advertisement2a.subscribe(
    (id: string) => (this.advertisement2 = id)
  );
  this.acctService.advertisement3a.subscribe(
    (id: string) => (this.advertisement3 = id)
  );
  this.acctService.helpInfoa.subscribe(
    (id: string) => (this.helpInfo = id)
  );
  this.acctService.info2a.subscribe(
    (id: string) => (this.info2 = id)
  );
  this.acctService.info3a.subscribe(
    (id: string) => (this.info3 = id)
  );
  this.acctService.closinga.subscribe(
    (id: string) => (this.closingStatement = id)
  );
  this.acctService.announcement1a.subscribe(
    (id: string) => (this.announcement1 = id)
  );
  this.acctService.announcement2a.subscribe(
    (id: string) => (this.announcement2 = id)
  );


  this.acctService.c1Namea.subscribe(
    (id: string) => (this.c1Name = id)
  );
  this.acctService.c1joba.subscribe(
    (id: string) => (this.c1Job = id)
  );
  this.acctService.c1Photoa.subscribe(
    (id: string) => (this.c1Photo = id)
  );
  this.acctService.c1desca.subscribe(
    (id: string) => (this.c1Desc = id)
  );

  this.acctService.c2Namea.subscribe(
    (id: string) => (this.c2Name = id)
  );
  this.acctService.c2joba.subscribe(
    (id: string) => (this.c2Job = id)
  );
  this.acctService.c2Photoa.subscribe(
    (id: string) => (this.c2Photo = id)
  );
  this.acctService.c2desca.subscribe(
    (id: string) => (this.c2Desc = id)
  );

  this.acctService.c3Namea.subscribe(
    (id: string) => (this.c3Name = id)
  );
  this.acctService.c3joba.subscribe(
    (id: string) => (this.c3Job = id)
  );
  this.acctService.c3Photoa.subscribe(
    (id: string) => (this.c3Photo = id)
  );
  this.acctService.c3desca.subscribe(
    (id: string) => (this.c3Desc = id)
  );

  this.acctService.c4Namea.subscribe(
    (id: string) => (this.c4Name = id)
  );
  this.acctService.c4joba.subscribe(
    (id: string) => (this.c4Job = id)
  );
  this.acctService.c4Photoa.subscribe(
    (id: string) => (this.c4Photo = id)
  );
  this.acctService.c4desca.subscribe(
    (id: string) => (this.c4Desc = id)
  );

  this.acctService.c5Namea.subscribe(
    (id: string) => (this.c5Name = id)
  );
  this.acctService.c5joba.subscribe(
    (id: string) => (this.c5Job = id)
  );
  this.acctService.c5Photoa.subscribe(
    (id: string) => (this.c5Photo = id)
  );
  this.acctService.c5desca.subscribe(
    (id: string) => (this.c5Desc = id)
  );

  this.acctService.rPhoto1.subscribe(
    (id: boolean) => (this.card1 = id)
  );
  this.acctService.rPhoto2.subscribe(
    (id: boolean) => (this.card2 = id)
  );
  this.acctService.rPhoto3.subscribe(
    (id: boolean) => (this.card3 = id)
  );
  this.acctService.rPhoto4.subscribe(
    (id: boolean) => (this.card4 = id)
  );
  this.acctService.rPhoto5.subscribe(
    (id: boolean) => (this.card5 = id)
  );
  this.titleInfo = this.acctService.titleInfo;

  this.c1Desc = this.acctService.c1desc;
  this.c1Job = this.acctService.c1job;
  this.c1Photo = this.acctService.c1Photo;
  this.c1Name = this.acctService.c1Name;

  this.c2Desc = this.acctService.c2desc;
  this.c2Job = this.acctService.c2job;
  this.c2Photo = this.acctService.c2Photo;
  this.c2Name = this.acctService.c2Name;

  this.c3Desc = this.acctService.c3desc;
  this.c3Job = this.acctService.c3job;
  this.c3Photo = this.acctService.c3Photo;
  this.c3Name = this.acctService.c3Name;

  this.c4Desc = this.acctService.c4desc;
  this.c4Job = this.acctService.c4job;
  this.c4Photo = this.acctService.c4Photo;
  this.c4Name = this.acctService.c4Name;

  this.c5Desc = this.acctService.c5desc;
  this.c5Job = this.acctService.c5job;
  this.c5Photo = this.acctService.c5Photo;
  this.c5Name = this.acctService.c5Name;

  this.c6Desc = this.acctService.c5desc;
  this.c6Job = this.acctService.c5job;
  this.c6Photo = this.acctService.c5Photo;
  this.c6Name = this.acctService.c5Name;

  this.c7Desc = this.acctService.c1desc;
  this.c7Job = this.acctService.c1job;
  this.c7Photo = this.acctService.c1Photo;
  this.c7Name = this.acctService.c1Name;


  this.NotAnEmitter = this.acctService.NotAnEmitter;
  this.row2 = this.acctService.row2;
  this.row3 = this.acctService.row3;
  this.row4 = this.acctService.row4;
  this.row5 = this.acctService.row5;
  this.row6 = this.acctService.row6;
  this.row7 = this.acctService.row7;
  this.row8 = this.acctService.row8;
  this.info1z = this.acctService.info1z;
  this.info2 = this.acctService.info2;
  this.info3 = this.acctService.info3;
  
  this.advertisement1 = this.acctService.advertisement1;
  this.advertisement2 = this.acctService.advertisement2;
  this.advertisement3 = this.acctService.advertisement3;
  this.helpInfo = this.acctService.helpInfo;
  this.closingStatement = this.acctService.closingStatement;
  this.announcement1 = this.acctService.announcement1;
  this.announcement2 = this.acctService.announcement2;

  }
}
