import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateNewMerchandise, FindMerchandiseReponse, UpdateMerchandiseResponse, createMerchandiseResponse,UpdateMerchandise, } from './merchandise.interface';


@Injectable({
    providedIn: 'root'
  })


export class MerchandiseService{
    private merchandiseUrl = "http://localhost:8105/merchandise"

    constructor(private http: HttpClient) {}

    createMerchandise(request: CreateNewMerchandise): Observable<createMerchandiseResponse> {
        return this.http.post<createMerchandiseResponse>(`${this.merchandiseUrl}`, request);
      }

    findMerchandiseByProductName(productName: String): Observable<FindMerchandiseReponse> {
        console.log(`${this.merchandiseUrl}/${productName}`);
        
        return this.http.get<FindMerchandiseReponse>(`${this.merchandiseUrl}/${productName}`);
    }
    findByAdmissionDate(admissionDate: String): Observable<FindMerchandiseReponse[]> {
        console.log(`${this.merchandiseUrl}/findByAdmissionDate/${admissionDate}`);
        return this.http.get<FindMerchandiseReponse[]>(`${this.merchandiseUrl}/findByAdmissionDate/${admissionDate}`);
    }
    deleteMerchandise(productId:number,userId:number): Observable<void> {
        return this.http.delete<void>(`${this.merchandiseUrl}/${productId}/${userId}`);
    }
    updateMerchandise(request:UpdateMerchandise, id:number): Observable<UpdateMerchandiseResponse>{
        return this.http.put<UpdateMerchandiseResponse>(`${this.merchandiseUrl}/${id}`,request);
    }
}