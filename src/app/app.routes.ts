import { Routes } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { GetSetFuncComponent } from './get-set-func/get-set-func.component';
import { SignalsComponent } from './signals/signals.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'counter',component:CounterAppComponent},
    {path:'get-set-func',component:GetSetFuncComponent},
    {path:'signals',component:SignalsComponent},
    {path:'todo',component:TodoComponent},
    {path:'',component:HomeComponent}

];
