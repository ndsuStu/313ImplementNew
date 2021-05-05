import { Component, OnInit } from '@angular/core';
import { ConnectingService } from "./../connecting.service";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  // @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();
  editBool: boolean = false;
  newID: string = "";
  newID2: string = "";
  newID3: string = "";
  newID4: string = "";
  newID5: string = "";
  newID6: string = "";
  newID7: string = "";
  newID8: string = "";
  newID9: string = "";
  newID10: string = "";
  newID11: string = "";
  newID12: string = "";
  newID13: string = "";
  newID14: string = "";
  newID15: string = "";
  newID16: string = "";
  newID17: string = "";
  newID18: string = "";
  newID19: string = "";

  b1: boolean = false;
  b2: boolean = false;
  b3: boolean = false;
  b4: boolean = false;
  b5: boolean = false;


pID1n: string = "";
pID1j: string = "";
pID1p: string = "";
pID1d: string = "";

pID2n: string = "";
pID2j: string = "";
pID2p: string = "";
pID2d: string = "";

pID3n: string = "";
pID3j: string = "";
pID3p: string = "";
pID3d: string = "";

pID4n: string = "";
pID4j: string = "";
pID4p: string = "";
pID4d: string = "";

pID5n: string = "";
pID5j: string = "";
pID5p: string = "";
pID5d: string = "";

card1: boolean = true;
  card2: boolean = true;
  card3: boolean = true;
  card4: boolean = true;
  card5: boolean = true;


  showOrHideEdit: boolean = false;

  // Ignore this
  edit(
    Fname1: string,
    Fname2: string,
    Fname3: string,
    Fname4: string,
    Fname5: string,
    Fname6: string,
    Fname7: string,
    Fname8: string,
    Fname9: string,
    Fname10: string,
    Fname11: string,
    Fname12: string,
    Fname13: string,
    Fname14: string,
    Fname15: string,
    Fname16: string,
    Fname17: string,
    Fname18: string,
    Fname19: string
  ) {
    this.dataB.titleInfo1a.emit(Fname1);
    this.dataB.announcement1a.emit(Fname2);
    this.dataB.announcement2a.emit(Fname3);
    this.dataB.advertisement1a.emit(Fname4);
    this.dataB.advertisement2a.emit(Fname5);
    this.dataB.advertisement3a.emit(Fname6);
    this.dataB.helpInfoa.emit(Fname7);
    this.dataB.closinga.emit(Fname8);
    this.dataB.info1a.emit(Fname9);
    this.dataB.info2a.emit(Fname10);
    this.dataB.info3a.emit(Fname11);
    this.editBool = false;
  
  }
  onClick() {
    this.editBool = false;
  }

  p1(Fname1: string,
    Fname2: string,
    Fname3: string,
    Fname4: string,) {
      this.dataB.c1Namea.emit(Fname1);
      this.dataB.c1joba.emit(Fname2);
      this.dataB.c1Photoa.emit(Fname3);
      this.dataB.c1desca.emit(Fname4);
      this.b1 = false;
      this.dataB.rPhoto1.emit(this.card1);
  }

  p2(Fname1: string,
    Fname2: string,
    Fname3: string,
    Fname4: string,) {
      this.dataB.c2Namea.emit(Fname1);
      this.dataB.c2joba.emit(Fname2);
      this.dataB.c2Photoa.emit(Fname3);
      this.dataB.c2desca.emit(Fname4);
      this.b2 = false;
      this.dataB.rPhoto2.emit(this.card2);

  }

  p3(Fname1: string,
    Fname2: string,
    Fname3: string,
    Fname4: string,) {
      this.dataB.c3Namea.emit(Fname1);
      this.dataB.c3joba.emit(Fname2);
      this.dataB.c3Photoa.emit(Fname3);
      this.dataB.c3desca.emit(Fname4);
      this.b3 = false;
      this.dataB.rPhoto3.emit(this.card3);
  }

  p4(Fname1: string,
    Fname2: string,
    Fname3: string,
    Fname4: string,) {
      this.dataB.c4Namea.emit(Fname1);
      this.dataB.c4joba.emit(Fname2);
      this.dataB.c4Photoa.emit(Fname3);
      this.dataB.c4desca.emit(Fname4);
      this.b4 = false;
      this.dataB.rPhoto4.emit(this.card4);
  }

  p5(Fname1: string,
    Fname2: string,
    Fname3: string,
    Fname4: string,) {
      this.dataB.c5Namea.emit(Fname1);
      this.dataB.c5joba.emit(Fname2);
      this.dataB.c5Photoa.emit(Fname3);
      this.dataB.c5desca.emit(Fname4);
      this.b5 = false;
      this.dataB.rPhoto5.emit(this.card5);
  }
  return() {}
  constructor(
    private dataB: ConnectingService,

  ) {}

  ngOnInit() {
  
    
    this.dataB.titleInfo1b.subscribe(
      (id: string) => (this.newID = id)
    );
    this.dataB.advertisement1b.subscribe(
      (id: string) => (this.newID2 = id)
    );
    this.dataB.advertisement2b.subscribe(
      (id: string) => (this.newID3 = id)
    );
    this.dataB.advertisement3b.subscribe(
      (id: string) => (this.newID4 = id)
    );
    this.dataB.helpInfob.subscribe(
      (id: string) => (this.newID5 = id)
    );
    this.dataB.closingb.subscribe(
      (id: string) => (this.newID6 = id)
    );
    this.dataB.info1b.subscribe(
      (id: string) => (this.newID11 = id)
    );
    this.dataB.info2b.subscribe(
      (id: string) => (this.newID7 = id)
    );
    this.dataB.info3b.subscribe(
      (id: string) => (this.newID8 = id)
    );
    this.dataB.announcement1b.subscribe(
      (id: string) => (this.newID9 = id)
    );
    this.dataB.announcement2b.subscribe(
      (id: string) => (this.newID10 = id)
    );
    this.dataB.editB.subscribe(
      (id: boolean) => (this.editBool = id)
    );


    this.dataB.c1Nameb.subscribe(
      (id: string) => (this.pID1n = id)
    );
    this.dataB.c1jobb.subscribe(
      (id: string) => (this.pID1j = id)
    );
    this.dataB.c1Photob.subscribe(
      (id: string) => (this.pID1p = id)
    );
    this.dataB.c1descb.subscribe(
      (id: string) => (this.pID1d = id)
    );

    this.dataB.c2Nameb.subscribe(
      (id: string) => (this.pID2n = id)
    );
    this.dataB.c2jobb.subscribe(
      (id: string) => (this.pID2j = id)
    );
    this.dataB.c2Photob.subscribe(
      (id: string) => (this.pID2p = id)
    );
    this.dataB.c2descb.subscribe(
      (id: string) => (this.pID2d = id)
    );


    this.dataB.c3Nameb.subscribe(
      (id: string) => (this.pID3n = id)
    );
    this.dataB.c3jobb.subscribe(
      (id: string) => (this.pID3j = id)
    );
    this.dataB.c3Photob.subscribe(
      (id: string) => (this.pID3p = id)
    );
    this.dataB.c3descb.subscribe(
      (id: string) => (this.pID3d = id)
    );


    this.dataB.c4Nameb.subscribe(
      (id: string) => (this.pID4n = id)
    );
    this.dataB.c4jobb.subscribe(
      (id: string) => (this.pID4j = id)
    );
    this.dataB.c4Photob.subscribe(
      (id: string) => (this.pID4p = id)
    );
    this.dataB.c4descb.subscribe(
      (id: string) => (this.pID4d = id)
    );


    this.dataB.c5Nameb.subscribe(
      (id: string) => (this.pID5n = id)
    );
    this.dataB.c5jobb.subscribe(
      (id: string) => (this.pID5j = id)
    );
    this.dataB.c5Photob.subscribe(
      (id: string) => (this.pID5p = id)
    );
    this.dataB.c5descb.subscribe(
      (id: string) => (this.pID5d = id)
    );


    this.dataB.photoB1.subscribe(
      (id: boolean) => (this.b1 = id)
    );
    this.dataB.photoB2.subscribe(
      (id: boolean) => (this.b2 = id)
    );
    this.dataB.photoB3.subscribe(
      (id: boolean) => (this.b3 = id)
    );
    this.dataB.photoB4.subscribe(
      (id: boolean) => (this.b4 = id)
    );
    this.dataB.photoB5.subscribe(
      (id: boolean) => (this.b5 = id)
    );
  }



}
