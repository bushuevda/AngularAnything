import { Component, HostBinding, Input, OnInit } from '@angular/core';

export type Size = "small" | "medium" | "big";

export type Line = {x1: string, y1: string, x2: string, y2: string};

@Component({
  selector: 'app-angle-base',
  imports: [],
  template: ""
})
export class AngleBase implements OnInit {
  fillColor = 'rgba(0, 0, 0, 1)';

  @Input() size: Size = "small";

  line1!: Line;
  line2!: Line;

  @HostBinding("style.--let-width")
  width!: string;

  @HostBinding("style.--let-height")
  height!: string;

  ngOnInit(): void {}
  
  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
