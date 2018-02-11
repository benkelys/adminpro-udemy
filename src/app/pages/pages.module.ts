import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTERS } from './pages.routes';



// Este archivo lo hice manualmente para para agarrar todas las paginas que yo quiera,
// envolverlas aquí y luego exportar una unica pagina conteniendola a todas.


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports: [ // Esto se exporta para que lo pueda utilizar en otro modulo que yo necesite
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent

    ],
    imports: [
        SharedModule,
        PAGES_ROUTERS
    ]
})

export class PagesModule {  }
