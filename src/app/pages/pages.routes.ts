import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



const pagesRoutes: Routes = [
    {
        path: '', // Si la url es vacía entonces abre pagesComponent.html que contiene un router-outlet donde estan las rutas hijas.
        component: PagesComponent,
        children: [ // Estas son las rutas que se presentan dentro de router-outlet dentro de pagesComponent.html
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', pathMatch: 'full', redirectTo: 'dashboard'  }


        ]
     }
];

export const PAGES_ROUTERS = RouterModule.forChild( pagesRoutes );
