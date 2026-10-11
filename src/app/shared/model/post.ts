import { Title } from "@angular/platform-browser"

export interface Ipost{
    id : string,
    body : string,
    userId : number,
    title : string
}


export interface IpostRes {
    [key : string] : Ipost
}


export interface resp {
    name : string
}
