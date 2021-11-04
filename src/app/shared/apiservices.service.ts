import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient) { }

  postsingUp(data:any){
   return this.http.post<any>("http://localhost:3000/signup",data).pipe(map((res:any)=>{
   console.log(res)
  }))
  }

  getlogin(){
    return this.http.get<any>("http://localhost:3000/signup")
  }

  getimg(){
    return this.http.get<any>("http://localhost:3000/img")
  }

  productsget(){
    return this.http.get<any>("https://fakestoreapi.com/products")
  }
}
