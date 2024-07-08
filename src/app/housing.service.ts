import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location'

@Injectable({
  providedIn: 'root'
})
export class HousingService {
 url='http://localhost:3000/locations'
  

 async getHousingLocations():Promise <HousingLocation[]>{
   const data = await fetch(this.url)

   
   return (await data.json()) ?? [];
  }
  

 async  getHousingLocationsById(id:number): Promise <HousingLocation|undefined>{
   const data = await fetch(`${this.url}/${id}`) 
   let obj=await data.json()
   console.log(obj.photo)
   return (obj) ?? {}
  } 


  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
  constructor() { }
}
