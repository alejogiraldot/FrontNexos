import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchandiseMainPageComponent } from './page/merchandise-main-page/merchandise-main-page.component';
import { MerchandiseByNameComponent } from './component/merchandise-by-name/merchandise-by-name.component';
import { MerchandiseByDateComponent } from './component/merchandise-by-date/merchandise-by-date.component';
import { CreateMerchandiseComponent } from './component/create-merchandise/create-merchandise.component';
import { CreateUsuarioComponent } from './component/create-usuario/create-usuario.component';

const routes: Routes = [
    {
        path:'',
        component: MerchandiseMainPageComponent,
        children:[
            {
                path:'merchandise-by-name',
                component: MerchandiseByNameComponent,
            },
            {
                path:'merchandise-by-date',
                component: MerchandiseByDateComponent
            },
            {
                path:'create-merchandise',
                component: CreateMerchandiseComponent
            },
            {
                path: 'create-usuario',
                component: CreateUsuarioComponent
              }
        ]
    }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchandiseRoutingModule {}
