import { Component, OnInit, ContentChild , TemplateRef, inject, forwardRef} from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { AngleSvgModule } from '../../icons/angle/import';
import { Size } from '../../icons/angle/angle.base';





@Component({
  selector: 'app-accordion-content',
  template: "<div *ngIf='pcPanel.active'><ng-content/><div>",
  imports: [CommonModule]
})
export class AccordionContent{
  pcPanel: AccordionPanel = inject(forwardRef(() => AccordionPanel));
  

} 


@Component({
  selector: 'app-accordion-panel',
  template: "<div [class]='classes'><ng-content/><div>",
  styleUrl: './accordion.css'
})
export class AccordionPanel implements OnInit{
  classes: string[] = [];
  public active: boolean = false;
  ngOnInit(): void {
    this.classes = [
      "app-accordion-panel"
    ]
  }
} 


@Component({
  selector: 'app-accordion-header',
  template: "<div [class]='classes' (click)=onClick()><ng-content/><app-angle-down [size]='sizeIcon' /><div>",
  styleUrl: './accordion.css',
  imports: [AngleSvgModule]
})
export class AccordionHeader implements OnInit{

  @Input() sizeIcon: Size = "small";

  classes: string[] = [];

  @Input() openPanel: boolean = false;


  pcPanel: AccordionPanel = inject(forwardRef(() => AccordionPanel));

  onClick(){
    this.openPanel = !this.openPanel;
    console.log(this.openPanel);
    console.log(this.pcPanel.active, ' ---');
    this.pcPanel.active = !this.pcPanel.active;
  }

  ngOnInit(): void {
    this.classes = [
      "app-accordion-header"
    ]
  }
} 




@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css'
})
export class Accordion implements OnInit {

  @Input() items: string[] = [];

 

  openAccordion: boolean = false;


  classes: string[] = [];

  ngOnInit(): void {
    this.items = [
      "Значение 1",
      "Значение 2",
      "Значение 3",
      "Значение 4",
      "Значение 5",
    ]

    this.classes = [
      "app-accordion"
    ]

    
  }




  onClick(){
    this.openAccordion = !this.openAccordion;
  }
}
