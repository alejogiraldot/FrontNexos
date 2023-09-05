import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateNewUserNexos, CreateNewUserNexosResponse, FindNewUserNexosReponse } from './user.interface';



@Injectable({
    providedIn: 'root'
  })


export class UserSerive{
    private userUrl = "http://localhost:8105/usernexos"
    constructor(private http: HttpClient) {}

    createUserNexos(request: CreateNewUserNexos): Observable<CreateNewUserNexosResponse> {
      return this.http.post<CreateNewUserNexosResponse>(`${this.userUrl}`, request);
    }

    findByUserName(userName: string): Observable<FindNewUserNexosReponse> {
      return this.http.get<FindNewUserNexosReponse>(`${this.userUrl}/findByAdmissionDate/${userName}`);
    }
    findAllUsers(): Observable<FindNewUserNexosReponse[]> {
      console.log(`${this.userUrl}/findByAdmissionDate`);
      
      return this.http.get<FindNewUserNexosReponse[]>(`${this.userUrl}/findAll`);
    }
    

}