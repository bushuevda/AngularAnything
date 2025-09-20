import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet} from "@angular/router";


import { Routes , RouterModule} from '@angular/router';
import { CAp } from './c-ap/c-ap';




@Component({
  selector: 'app-accordion',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Accordion {

}


export const AccordionRoutes: Routes = [
    {           
      path: "cap", component: CAp, 
    }
];