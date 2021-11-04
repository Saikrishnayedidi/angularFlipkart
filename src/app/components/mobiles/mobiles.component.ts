import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/shared/apiservices.service';
import { CardserviceService } from 'src/app/shared/cardservice.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
products:any
  constructor(private api:ApiservicesService,private cart:CardserviceService) { }

  ngOnInit(): void {
    this.api.productsget().subscribe((res)=>{
 this.products=res;

 this.products.forEach((item:any ) => {
   Object.assign(item,{quantity:1,totalo:item.price})
 });
    })
  }
addtoCart(product:any){
  this.cart.addtoCart(product)
}

}
