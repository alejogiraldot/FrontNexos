import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';






@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ButtonModule,MenuModule,InputTextModule,CardModule,DropdownModule]
})
export class MaterialModule { }
