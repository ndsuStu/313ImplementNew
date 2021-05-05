import { Injectable } from '@angular/core';
import { Component, EventEmitter, Input, Output } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ConnectingService {

  constructor() { }

  statusEdited1: EventEmitter<boolean> = new EventEmitter<boolean>();
  statusEdited2: EventEmitter<boolean> = new EventEmitter<boolean>();
  statusEdited3: EventEmitter<boolean> = new EventEmitter<boolean>();
  statusEdited4: EventEmitter<boolean> = new EventEmitter<boolean>();
  statusEdited5: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  editB: EventEmitter<boolean> = new EventEmitter<boolean>();

  photoB1: EventEmitter<boolean> = new EventEmitter<boolean>();
  photoB2: EventEmitter<boolean> = new EventEmitter<boolean>();
  photoB3: EventEmitter<boolean> = new EventEmitter<boolean>();
  photoB4: EventEmitter<boolean> = new EventEmitter<boolean>();
  photoB5: EventEmitter<boolean> = new EventEmitter<boolean>();

  rPhoto1: EventEmitter<boolean> = new EventEmitter<boolean>();
  rPhoto2: EventEmitter<boolean> = new EventEmitter<boolean>();
  rPhoto3: EventEmitter<boolean> = new EventEmitter<boolean>();
  rPhoto4: EventEmitter<boolean> = new EventEmitter<boolean>();
  rPhoto5: EventEmitter<boolean> = new EventEmitter<boolean>();

  titleInfo1a: EventEmitter<string> = new EventEmitter<string>();
  advertisement1a: EventEmitter<string> = new EventEmitter<string>();
  advertisement2a: EventEmitter<string> = new EventEmitter<string>();
  advertisement3a: EventEmitter<string> = new EventEmitter<string>();
  helpInfoa: EventEmitter<string> = new EventEmitter<string>();
  info1a: EventEmitter<string> = new EventEmitter<string>();
  row1a: EventEmitter<string> = new EventEmitter<string>();
  row2a: EventEmitter<string> = new EventEmitter<string>();
  row3a: EventEmitter<string> = new EventEmitter<string>();
  row4a: EventEmitter<string> = new EventEmitter<string>();
  row5a: EventEmitter<string> = new EventEmitter<string>();
  row6a: EventEmitter<string> = new EventEmitter<string>();
  row7a: EventEmitter<string> = new EventEmitter<string>();
  row8a: EventEmitter<string> = new EventEmitter<string>();
  info2a: EventEmitter<string> = new EventEmitter<string>();
  info3a: EventEmitter<string> = new EventEmitter<string>();
  announcement1a: EventEmitter<string> = new EventEmitter<string>();
  announcement2a: EventEmitter<string> = new EventEmitter<string>();
  closinga: EventEmitter<string> = new EventEmitter<string>();

  titleInfo1b: EventEmitter<string> = new EventEmitter<string>();
  advertisement1b: EventEmitter<string> = new EventEmitter<string>();
  advertisement2b: EventEmitter<string> = new EventEmitter<string>();
  advertisement3b: EventEmitter<string> = new EventEmitter<string>();
  helpInfob: EventEmitter<string> = new EventEmitter<string>();
  info1b: EventEmitter<string> = new EventEmitter<string>();
  row1b: EventEmitter<string> = new EventEmitter<string>();
  row2b: EventEmitter<string> = new EventEmitter<string>();
  row3b: EventEmitter<string> = new EventEmitter<string>();
  row4b: EventEmitter<string> = new EventEmitter<string>();
  row5b: EventEmitter<string> = new EventEmitter<string>();
  row6b: EventEmitter<string> = new EventEmitter<string>();
  row7b: EventEmitter<string> = new EventEmitter<string>();
  row8b: EventEmitter<string> = new EventEmitter<string>();
  info2b: EventEmitter<string> = new EventEmitter<string>();
  info3b: EventEmitter<string> = new EventEmitter<string>();
  announcement1b: EventEmitter<string> = new EventEmitter<string>();
  announcement2b: EventEmitter<string> = new EventEmitter<string>();
  closingb: EventEmitter<string> = new EventEmitter<string>();



  titleInfo: string = "Stop doing things the hard way! Employ our services and get the job done fast";
  advertisement1: string = "Create differentiated shopping experiences across infinite channels with a full suite of APIs.";
  advertisement2: string = "Scale product inventory, automate purchasing, streamline fulfillment and customize beyond limits.";
  advertisement3: string = "Design, build and launch with the store of your dreams.";
  helpInfo: string = "How our product benefits you!";
  closingStatement: string = "Landscaping Pro is the new way to build and scale your business!";
  info1z: string = "Design, build and launch your business without limits.";
  NotAnEmitter: string = "We hear you on the stress of running your own business!";
  row2: string = "This software is intended to reduce the business and accounting work necessary to run a landscaping company.";
  row3: string = "A business can be forced to hire extra employees for accounting and business upkeep work.";
  row4: string = "Using this software, these repeated business management expenses can be avoided, thus leading to long-term savings for the company.";
  row5: string = "In addition, humans introduce the aptly named “human errors”, whereas in properly coded software.";
  row6: string = "Errors in the processing of this type of work are eliminated.";
  row7: string = "This can lead to saved time and money, as each error can lead to confusion and sometimes even legal troubles.";
  row8: string = "In addition, the system can have timing and/or requirements reminders, preventing late or overdue submissions of legal work, company payments, and more!";
  info2: string = "Manage your business without friction, let our product do the hard part.";
  info3: string = "Unlimited possibilities with the new freetime you will soon have after using our product.";
  announcement1: string = "Our architecture is designed with the capability to accelerate your strategic roadmap by separating your business operations all-in-one.";
  announcement2: string = "Build what you want, how you want and do it now. See why so many businesses and homeowners are using our product.";

  c1Name: string = "Kelly Smith";
  c1job: string = "Receptionis";
  c1desc: string = "Why spend another modicum of my time writing these pointless reports when I could be spending time with my new daughter? Lawncare Pro came through and allowed me to take care of my child while they did all the work.";
  c1Photo: string = "assets/img/desk.png";

  c2Name: string = "Tommy Turner";
  c2job: string = "Business Owner";
  c2desc: string = "Lawncare Pro has saved me hours of time and hours of frustration.";
  c2Photo: string = "assets/img/team3.png";

  c3Name: string = "Jade Ermson";
  c3job: string = "Photography";
  c3desc: string = "The grass in my front yard is 3/4s of an inch too tall, the Homeowner Association is going to kill me! Glad I could count on Lawncare Pro to help me just in time.";
  c3Photo: string = "assets/img/team2.png";

  c4Name: string = "Morgan Eastwood";
  c4job: string = "Supply Specialist";
  c4desc: string = "I had to make something of my life, starting a business and being my own boss was exactly how I did it. Landscaping Pro made the difficult adminstration tasks simple and easy. ";
  c4Photo: string = "assets/img/team1.png";

  c5Name: string = "Anna Fredrikson";
  c5job: string = "Accountant";
  c5desc: string = "My boss keeps extending my hours and my child needs constant attention, if I have to deal with anything unnecessary that will waste my time I simply cannot waste time on that. Landscaping Pro has saved me lots of time!";
  c5Photo: string = "assets/img/gg4.jpg";

  
  c1Namea: EventEmitter<string> = new EventEmitter<string>();
  c1joba: EventEmitter<string> = new EventEmitter<string>();
  c1desca: EventEmitter<string> = new EventEmitter<string>();
  c1Photoa: EventEmitter<string> = new EventEmitter<string>();

  c1Nameb: EventEmitter<string> = new EventEmitter<string>();
  c1jobb: EventEmitter<string> = new EventEmitter<string>();
  c1descb: EventEmitter<string> = new EventEmitter<string>();
  c1Photob: EventEmitter<string> = new EventEmitter<string>();

  c2Namea: EventEmitter<string> = new EventEmitter<string>();
  c2joba: EventEmitter<string> = new EventEmitter<string>();
  c2desca: EventEmitter<string> = new EventEmitter<string>();
  c2Photoa: EventEmitter<string> = new EventEmitter<string>();
  
  c2Nameb: EventEmitter<string> = new EventEmitter<string>();
  c2jobb: EventEmitter<string> = new EventEmitter<string>();
  c2descb: EventEmitter<string> = new EventEmitter<string>();
  c2Photob: EventEmitter<string> = new EventEmitter<string>();

  c3Namea: EventEmitter<string> = new EventEmitter<string>();
  c3joba: EventEmitter<string> = new EventEmitter<string>();
  c3desca: EventEmitter<string> = new EventEmitter<string>();
  c3Photoa: EventEmitter<string> = new EventEmitter<string>();

  c3Nameb: EventEmitter<string> = new EventEmitter<string>();
  c3jobb: EventEmitter<string> = new EventEmitter<string>();
  c3descb: EventEmitter<string> = new EventEmitter<string>();
  c3Photob: EventEmitter<string> = new EventEmitter<string>();

  c4Namea: EventEmitter<string> = new EventEmitter<string>();
  c4joba: EventEmitter<string> = new EventEmitter<string>();
  c4desca: EventEmitter<string> = new EventEmitter<string>();
  c4Photoa: EventEmitter<string> = new EventEmitter<string>();

  c4Nameb: EventEmitter<string> = new EventEmitter<string>();
  c4jobb: EventEmitter<string> = new EventEmitter<string>();
  c4descb: EventEmitter<string> = new EventEmitter<string>();
  c4Photob: EventEmitter<string> = new EventEmitter<string>();

  c5Namea: EventEmitter<string> = new EventEmitter<string>();
  c5joba: EventEmitter<string> = new EventEmitter<string>();
  c5desca: EventEmitter<string> = new EventEmitter<string>();
  c5Photoa: EventEmitter<string> = new EventEmitter<string>();

  c5Nameb: EventEmitter<string> = new EventEmitter<string>();
  c5jobb: EventEmitter<string> = new EventEmitter<string>();
  c5descb: EventEmitter<string> = new EventEmitter<string>();
  c5Photob: EventEmitter<string> = new EventEmitter<string>();



  oldStatus: string;
  add(
    newStatus: string
  ) {
    this.titleInfo = newStatus;
  }
  
}
