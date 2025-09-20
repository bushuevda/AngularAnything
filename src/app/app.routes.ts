import { Routes } from '@angular/router';
import { Home } from './vizualization-components/home/home';
import { Accordion } from './vizualization-components/accordion/accordion';
import { CAp } from './vizualization-components/accordion/c-ap/c-ap';



 

export const routes: Routes = [
    {    
        path: "", component: Home, pathMatch: "full",
    },
    {    
        path: "accordion", component: Accordion, 
        loadChildren: () => import("./vizualization-components/accordion/accordion").then((m) => m.AccordionRoutes)
    },
];
