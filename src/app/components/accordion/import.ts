import { NgModule } from '@angular/core';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from './accordion';


 @NgModule({
    imports: [Accordion, AccordionContent, AccordionHeader, AccordionPanel],
    exports: [Accordion, AccordionContent, AccordionHeader, AccordionPanel]
 })
 export class AccordionModule {}
