import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button implements OnInit {

  @Input("value") value: string = "";

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();

  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter();

  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter();

  @Input("disabled") disabled: boolean = false;

  @Input("rounded") rounded: boolean = false;

  classes: string[] = [];

  ngOnInit(): void {
    this.classes = [
      "app-button",
      "app-button-background",
      "app-button-font",
      "app-button-border",
      "app-button-border-rounded",
      "app-button-size",
      this.disabled ? "app-button-disabled" : "app-button-not-disabled"
    ]
  }
}
