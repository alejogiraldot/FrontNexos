import { Component } from '@angular/core';
import { MerchandiseService } from 'src/app/merchandise.service';
import { FindMerchandiseReponse } from 'src/app/merchandise.interface';
import { FindNewUserNexosReponse } from 'src/app/user.interface';
import { UserSerive } from 'src/app/user.service';

@Component({
  selector: 'app-merchandise-by-name',
  templateUrl: './merchandise-by-name.component.html',
  styles: [
  ]
})
export class MerchandiseByNameComponent {
  users: FindNewUserNexosReponse[] = [];
  productName: string = "";
  merchandiseData!: FindMerchandiseReponse;
  selectedUser!: FindNewUserNexosReponse;
  constructor(private merchandiseService: MerchandiseService,private userService: UserSerive) {}
  
  ngOnInit(): void {
    this.userService.findAllUsers().subscribe({
      next: (response) => {
        console.log(response);

        this.users = response;
      },
    });
  }

  deleteMerchandise(productId: number, userId: number
    ) {
    const user = {
      userWhoRegisters: {
        id: this.selectedUser.id,
      },
    };
    this.merchandiseService.deleteMerchandise(productId, userId).subscribe(
      () => {
        alert("El producto se elimió con exito!")
        console.log('Producto eliminado con éxito');
      },
      (error) => {
        console.error('Error al eliminar el producto', error);
        alert('Asegurate de que el usuario que creó el producto sea el mismo que lo eliminará');
      }
    );
  }

  searchMerchandise() {
    if (this.productName) {
      this.merchandiseService.findMerchandiseByProductName(this.productName).subscribe(
        (response) => {
          console.log('Respuesta del servicio:', response);
          this.merchandiseData = response;
        },
        (error) => {
          console.error('Ocurrió un error al buscar por fecha.', error);
          alert('Parece que esa mercancía no se encuentra en el inventario.');
        }
      );
    }
  }
}

