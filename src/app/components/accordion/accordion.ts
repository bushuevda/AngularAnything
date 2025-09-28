import { Component, OnInit, inject, forwardRef, input, model, computed} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngleSvgModule } from '../../icons/angle/import';
import { Size } from '../../icons/angle/angle.base';


@Component({
  selector: 'app-accordion-content',
  template: "<div *ngIf='refPanel.active()'><ng-content/><div>",
  imports: [CommonModule]
})
export class AccordionContent{
  refPanel: AccordionPanel = inject(forwardRef(() => AccordionPanel));
} 


@Component({
  selector: 'app-accordion-panel',
  template: "<div [class]='classes'><ng-content/><div>",
  styleUrl: './accordion.css'
})
export class AccordionPanel implements OnInit{
  classes: string[] = [];

  refAccordion: Accordion = inject(forwardRef(() => Accordion));


  active = computed(() => (this.refAccordion.multiple() ? this.valueEquals(this.refAccordion.value(), this.value()) : this.refAccordion.value() === this.value()));


  value = model<undefined | null | number>(undefined);

  valueEquals(currentValue: any, value: any): boolean {
      if (Array.isArray(currentValue)) {
          return currentValue.includes(value);
      }
      return currentValue === value;
  }

  ngOnInit(): void {
    this.classes = [
      "app-accordion-panel"
    ]
  }
} 


@Component({
  selector: 'app-accordion-header',
  template: "<div [class]='classes' (click)=onClick()><ng-content/><app-angle-down [size]='sizeIcon()' /><div>",
  styleUrl: './accordion.css',
  imports: [AngleSvgModule]
})
export class AccordionHeader implements OnInit{

  sizeIcon = input<Size>("small");

  classes: string[] = [];

  refAccordion: Accordion = inject(forwardRef(() => Accordion));

  refPanel: AccordionPanel = inject(forwardRef(() => AccordionPanel));

 //a p h c
 // h -> value
  onClick(){
    console.log(this.refAccordion.value(), this.refPanel.value())
    if(this.refAccordion.multiple()){
        const currentValue = this.refAccordion.value();
        const newValue = Array.isArray(currentValue) ? [...currentValue] : [];
            const index = newValue.indexOf(this.refPanel.value() as number);

      if (index !== -1) {
                newValue.splice(index, 1);
            } else {
                newValue.push(this.refPanel.value() as number);
            }

            this.refAccordion.value.set(newValue as typeof this.refAccordion.value extends (...args: any) => infer R ? R : never);

    } else {
        this.refAccordion.value.set(this.refPanel.value())
    }
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

  items = input<string[] | undefined>([
      "Значение 1",
      "Значение 2",
      "Значение 3",
      "Значение 4",
      "Значение 5",
  ]);

  multiple = input(false);

  public value = model<undefined | null | number | number[]>(undefined);

  classes: string[] = [];

  ngOnInit(): void {
    this.classes = [
      "app-accordion"
    ]
  }
}
