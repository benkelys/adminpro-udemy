import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



// Este archivo lo hice manualmente para para agarrar todas las paginas que yo quiera,
// envolverlas aquí y luego exportar una unica pagina conteniendola a todas.
// NOTA: Este lo importé en pages.module y problema resuelto


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent

    ],
    exports: [ // Esto se exporta para que lo pueda utilizar en otro modulo que yo necesite
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ]
})

export class SharedModule {  }
