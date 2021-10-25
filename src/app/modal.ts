export interface Link{
    id?:number;
    url:string,
    short:string,
    no_of_clicks:number
}
export interface registeruser{
    email:string,
    dob:Date,
    password:string,
    cpassword?:string
}
export interface loginuser{
    email:string,
    password:string
}