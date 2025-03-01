import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../components/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            { path: '', component: HomeComponent },
            {path: 'tienda/:storeId', component: StoreComponent}
        ]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
