import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet} from "@angular/router";

import { Routes , RouterModule} from '@angular/router';
import { CAp } from './c-ap/c-ap';

import { CommonModule } from '@angular/common';

import { AccordionModule } from '../../components/accordion/import';



@Component({
  selector: 'app-v-accordion',
  imports: [RouterOutlet, RouterLink, AccordionModule, CommonModule],
  templateUrl: './v-accordion.html',
  styleUrl: './v-accordion.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VAccordion {

}


export const AccordionRoutes: Routes = [
    {           
      path: "cap", component: CAp, 
    }
];