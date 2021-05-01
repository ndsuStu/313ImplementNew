import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewControlService {

  constructor() { }

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
