export interface CreateNewMerchandise {
    id?: number;
    productName: string;
    quantity:number;
    userWhoRegisters: userWhoRegisters;

  }

export interface userWhoRegisters{
    id?: number;
    userName?: string;
    age?: string;
    addmisionUserDate?: Date;
    userType?:string;
}

export interface createMerchandiseResponse {
    admissionDate: string;
    productName: string;
    quantity:number;
    userWhoRegisters: userWhoRegisters;
}

export interface FindMerchandiseReponse {
    id: number;
    admissionDate: string;
    productName: string;
    quantity:number;
    userWhoRegisters: userWhoRegisters;
}

export interface UpdateMerchandise{
    productName: string ;
    quantity: number ;
}
export interface UpdateMerchandiseResponse{
    productName: string;
    admissionDate: string;
    quantity: number;
    userWhoRegisters: userWhoRegisters;
}

