import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-merchandise-main-page',
  templateUrl: './merchandise-main-page.component.html',
  styles: [],
})
export class MerchandiseMainPageComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Buscar por nombre de producto',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['merchandise/merchandise-by-name']);
            },
          },
          {
            label: 'Buscar por fecha',
            icon: 'pi pi-search',
            command: () => {
                this.router.navigate(['merchandise/merchandise-by-date']);
            },
          },
          {
            label: 'Crear mercancia',
            icon: 'pi pi-shopping-bag',
            command: () => {
                this.router.navigate(['merchandise/create-merchandise']);
            },
          },
          {
            label: 'Crear nuevo usuario',
            icon: 'pi pi-shopping-bag',
            command: () => {
                this.router.navigate(['merchandise/create-usuario']);
            },
          }
        ],
      },
    ];
  }
}
