import { Routes } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { GetSetFuncComponent } from './get-set-func/get-set-func.component';
import { SignalsComponent } from './signals/signals.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path:'counter',component:CounterAppComponent},
    {path:'get-set-func',component:GetSetFuncComponent},
    {path:'signals',component:SignalsComponent},
    {path:'todo',component:TodoComponent},
    {path:'',component:HomeComponent},
    {path:'profile',component:ProfileComponent,data:{name:'Aman'}},
    {path:'user/:id/:name',component:UserComponent},
    //Wild Card Routing
    {path:"**",component:PageNotFoundComponent}

];
