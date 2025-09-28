import { NgModule } from '@angular/core';
import { Down } from './down';
import { Up } from './up';
import { Left } from './left';
import { Right } from './right';

 @NgModule({
    imports: [Down, Up, Left, Right],
    exports: [Down, Up, Left, Right]
 })
 export class AngleSvgModule {}
