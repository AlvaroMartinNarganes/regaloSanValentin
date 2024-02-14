import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChooseComponent} from "./choose/choose.component";
import {MequiereComponent} from "./mequiere/mequiere.component";
import {QuieroComponent} from "./quiero/quiero.component";
import {FinComponent} from "./fin/fin.component";

export const routes: Routes = [
  {path:'',component:HomeComponent, title:"Feliz San Valentín"},
  {path:'choose',component:ChooseComponent, title:"Feliz San Valentín"},
  {path:'mequiere',component:MequiereComponent, title:"Feliz San Valentín"},
  {path:'quiero',component:QuieroComponent, title:"Feliz San Valentín"},
  {path:'fin',component:FinComponent, title:"Feliz San Valentín"},
];
