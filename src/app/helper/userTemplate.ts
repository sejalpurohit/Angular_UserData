export interface User{
    username:string;
    name:string;
    email:string;
    address:{
        street:string;
        suite:string;
        city:string;
        zipcode:string;
    }
}