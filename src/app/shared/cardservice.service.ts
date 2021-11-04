import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {
   public cartlist:any=[]
   public productlist=new BehaviorSubject<any>([])
  constructor() { }
  getproducts(){
    return this.productlist.asObservable();
  }

  setproducts(product:any){
    this.cartlist.push(...product)
    this.productlist.next(product)
  }
  addtoCart(product:any){
    this.cartlist.push(product)
    this.productlist.next(this.cartlist)
    console.log(this.cartlist)
  }
  removeItem(product:any){
    this.cartlist.map((a:any,index:any)=>{
    if(product.id===a.id){
      this.cartlist.splice(index,1);
      
    }
    })
    this.productlist.next(this.cartlist)
  }
 
}
