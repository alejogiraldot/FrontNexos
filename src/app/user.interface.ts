export interface UserNexos {
    id: number;
    userName: string;
    age:number;
    addmisionUserDate: Date;
    userType:string;
  }
  
export interface CreateNewUserNexos {
    userName: string;
    age:number;
    userType:string;
}

export interface CreateNewUserNexosResponse {
    userName: string;
    age:string;
    addmisionUserDate: string;
    userType:string;
}

export interface FindNewUserNexosReponse {
    id:number;
    userName: string;
    age:string;
    addmisionUserDate: string;
    userType:string;
}

