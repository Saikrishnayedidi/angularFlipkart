import { Component, OnInit } from '@angular/core';
import { CardserviceService } from 'src/app/shared/cardservice.service';

@Component({
  selector: 'app-addtocard',
  templateUrl: './addtocard.component.html',
  styleUrls: ['./addtocard.component.scss']
})
export class AddtocardComponent implements OnInit {
  dispalyAddCart:any=[]
  constructor(private addtocarts:CardserviceService) { }

  ngOnInit(): void {
    this.addtocarts.getproducts().subscribe((res)=>{
      this.dispalyAddCart=res
    })
  }
  delete(product:any){
    this.addtocarts.removeItem(product)
  }


}
