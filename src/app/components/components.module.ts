import { NgModule } from '@angular/core';
import { BusinessCardComponent } from './business-card/business-card.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { RouterModule } from '@angular/router';
import { NbCardModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NbCardModule
    ],
    declarations: [
        BusinessCardComponent,
        NotFoundComponent,
        HeaderMenuComponent,
        SubheaderComponent
    ],
    exports: [
        BusinessCardComponent,
        NotFoundComponent,
        HeaderMenuComponent,
        SubheaderComponent
    ]
})
export class ComponentsModule { }
