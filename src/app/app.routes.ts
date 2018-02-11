import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './register/register.component';




const appRoutes: Routes = [
    { path: 'login', component: LoginComponent }, // Esta está al mismo nivel que pagesComponent.html
    { path: 'register', component: RegisterComponent }, // Esta está al mismo nivel que pagesComponent.html
    { path: '**', component: NopagefoundComponent } // Si no encuentra ninguna de las paginas entonces abre a  NopagefoundComponent.html
];

export const APP_ROUTERS = RouterModule.forRoot( appRoutes, { useHash: true } );


