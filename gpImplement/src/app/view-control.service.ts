import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewControlService {

  constructor() { }

  //This variable will be true when an employee has logged in, false otherwise. 
  isEmp: boolean = false;

  //this variable will be 0 if the customer hasn't logged in, and otherwise it will be the customer's account number
  isCust: number = -1;

  //This dictionary contains every variable used to control which component is displayed. FEEL FREE TO ADD TO IT AS YOU SEE NECESSARY
  
  
  displayDict: {[view:string]:boolean} = {"appView":true, "createCust":false, "genInfo":false, "empPage":false, "custPage":false}

  //This method properly handles all changing of the view. Simply pass it the name of the view in the dictionary you want to change to the current view.
  changeViewTo(view: string){
    try{
      for (var key in this.displayDict){
        this.displayDict[key] = false;
      }
      this.displayDict[view] = true;
    }catch{
      for (var key in this.displayDict){
        this.displayDict[key] = false;
      }
    }

  }
}
