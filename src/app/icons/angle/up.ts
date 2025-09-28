import { Component } from '@angular/core';
import { AngleBase } from './angle.base';


@Component({
  selector: 'app-angle-up',
  imports: [],
  templateUrl: './angle.base.svg',
  styleUrl: './angle.base.css'
})
export class Up extends AngleBase {

  constructor(){
    super();
    super.ngOnInit();
  }

  override ngOnInit(): void {
    switch(this.size){
      case 'small':
        this.line1 = {x1: "0", y1: "5", x2: "5.5", y2: "0"};
        this.line2 = {x1: "5", y1: "0", x2: "10", y2: "5"};
        this.width = "10px";
        this.height = "5px";
        break;
      case "medium":
        this.line1 = {x1: "0", y1: "7.5", x2: "8", y2: "0"};
        this.line2 = {x1: "7.5", y1: "0", x2: "15", y2: "7.5"};
        this.width = "20px";
        this.height = "10px";
        break;
      case "big":
        this.line1 = {x1: "0", y1: "10", x2: "10.5", y2: "0"};
        this.line2 = {x1: "10", y1: "0", x2: "20", y2: "10"};
        this.width = "20px";
        this.height = "10px";
        break;
    }
  }
  

}
