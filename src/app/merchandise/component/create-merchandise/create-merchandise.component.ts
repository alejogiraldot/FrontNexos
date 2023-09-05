import { Component, OnInit } from '@angular/core';
import { UserSerive } from 'src/app/user.service';
import { FindNewUserNexosReponse } from 'src/app/user.interface';
import { CreateNewMerchandise } from 'src/app/merchandise.interface';
import { MerchandiseService } from 'src/app/merchandise.service';


@Component({
  selector: 'app-create-merchandise',
  templateUrl: './create-merchandise.component.html',
  styles: [],
})
export class CreateMerchandiseComponent implements OnInit {
  users: FindNewUserNexosReponse[] = [];
  selectedUser!: FindNewUserNexosReponse;
  userToCreate!: CreateNewMerchandise;
  productName: string = '';
  quantity: number = 0;
  
  constructor(private merchandiseService: MerchandiseService,private userService: UserSerive) {}
  ngOnInit(): void {
    this.userService.findAllUsers().subscribe({
      next: (response) => {
        console.log(response);

        this.users = response;
      },
    });
  }
  createUser() {
    if (this.selectedUser) {
      const merchandise = {
        productName: this.productName,
        quantity: this.quantity,
        userWhoRegisters: {
          id: this.selectedUser.id,
        },
      };
      this.merchandiseService.createMerchandise(merchandise).subscribe(
        (response) => {
          alert("Mercarcía creada con exito")
          console.log('Mercancía creada con éxito:', response);
        },
        (error) => {
          alert("No se pudo crear el ingreso de la mercancía porque ya existe uno en el inventario")
          console.error('Error al crear la mercancía:', error);
        }
      );
    } else {
      console.error('Debes seleccionar un usuario antes de crear la mercancía.');
    }
  }
}
  
  
  
