import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchandiseMainPageComponent } from './page/merchandise-main-page/merchandise-main-page.component';
import { MerchandiseRoutingModule } from './merchandise-routing.module';
import { MaterialModule } from '../material/material.module';
import { MerchandiseByNameComponent } from './component/merchandise-by-name/merchandise-by-name.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormsModule } from '@angular/forms';
import { MerchandiseByDateComponent } from './component/merchandise-by-date/merchandise-by-date.component';
import { CreateMerchandiseComponent } from './component/create-merchandise/create-merchandise.component';
import { CreateUsuarioComponent } from './component/create-usuario/create-usuario.component';





@NgModule({
  declarations: [
    MerchandiseMainPageComponent,
    MerchandiseByNameComponent,
    MerchandiseByDateComponent,
    CreateMerchandiseComponent,
    CreateUsuarioComponent, 
  ],
  imports: [
    CommonModule,
    MerchandiseRoutingModule,
    MaterialModule,
    FormsModule,
    KeyFilterModule
  ]
})
export class MerchandiseModule { }
