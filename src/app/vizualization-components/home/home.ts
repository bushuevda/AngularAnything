import { Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { Menu } from '../../components/menu/menu';


@Component({
  selector: 'app-home',
  imports: [RouterModule, Menu],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
