import { Component } from '@angular/core';
import { FindMerchandiseReponse } from 'src/app/merchandise.interface';
import { MerchandiseService } from 'src/app/merchandise.service';
import { FindNewUserNexosReponse } from 'src/app/user.interface';
import { UserSerive } from 'src/app/user.service';

@Component({
  selector: 'app-merchandise-by-date',
  templateUrl: './merchandise-by-date.component.html',
  styles: [],
})
export class MerchandiseByDateComponent {
merchandiseList: FindMerchandiseReponse[] = [];
searchValue: string = '';
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

  
  searchMerchandise() {
    if (this.searchValue) {
      this.merchandiseService.findByAdmissionDate(this.searchValue).subscribe(
        (response) => {
          console.log('Respuesta del servicio:', response);
          this.merchandiseList = response;
        },
        (error) => {
          alert('Ocurrió un error al buscar por fecha.');
        }
      );
    }
  }


}
