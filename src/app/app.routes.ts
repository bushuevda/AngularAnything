import { Routes } from '@angular/router';
import { Home } from './vizualization-components/home/home';
import { VAccordion } from './vizualization-components/v-accordion/v-accordion';
import { CAp } from './vizualization-components/v-accordion/c-ap/c-ap';



 

export const routes: Routes = [
    {    
        path: "", component: Home, pathMatch: "full",
    },
    {    
        path: "v-accordion", component: VAccordion, 
        loadChildren: () => import("./vizualization-components/v-accordion/v-accordion").then((m) => m.AccordionRoutes)
    },
];
