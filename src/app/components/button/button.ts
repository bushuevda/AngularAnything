import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

  @Input("value") value: string = "";

  @Output("onClick") onClick(callback: () => void){
    callback();
  } 


}
