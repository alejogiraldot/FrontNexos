import { Component } from '@angular/core';
import { UserSerive } from 'src/app/user.service';
import { CreateNewUserNexos } from 'src/app/user.interface';
import { CreateNewUserNexosResponse } from 'src/app/user.interface';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: []
})
export class CreateUsuarioComponent {
  newUser: CreateNewUserNexos = {
    userName: '',
    age: 0,
    userType: "" 
  };

  userTypeOptions: any[] = [
    { label: 'Administrador', value: 'administrador' },
    { label: 'Soporte', value: 'soporte' },
    { label: 'Asesor de ventas', value: 'asesor_de_ventas' }
  ];

  constructor(private userService: UserSerive) {}

  createUser() {
    this.userService.createUserNexos(this.newUser).subscribe(
      (response: CreateNewUserNexosResponse) => {
        alert('Usuario creado exitosamente:');
        
      },
      (error) => {
        ('Error al crear el usuario:');
        
      }
    );
  }
}
