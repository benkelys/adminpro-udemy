import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './register/register.component';




const appRoutes: Routes = [
    {
        path: '', // Si la url es vacía entonces abre pagesComponent.html que contiene un router-outlet donde estan las rutas hijas.
        component: PagesComponent,
        children: [ // Estas son las rutas que se presentan dentro de router-outlet dentro de pagesComponent.html
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', pathMatch: 'full', redirectTo: 'dashboard'  }


        ]
     },
    { path: 'login', component: LoginComponent }, // Esta está al mismo nivel que pagesComponent.html
    { path: 'register', component: RegisterComponent }, // Esta está al mismo nivel que pagesComponent.html
    { path: '**', component: NopagefoundComponent } // Si no encuentra ninguna de las paginas entonces abre a  NopagefoundComponent.html
];

export const APP_ROUTERS = RouterModule.forRoot( appRoutes, { useHash: true } );


