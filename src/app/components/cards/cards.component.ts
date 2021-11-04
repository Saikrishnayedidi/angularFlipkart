import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/shared/apiservices.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  data:any
  constructor(private impapi:ApiservicesService) { }

  ngOnInit(): void {
 this.impapi.getimg().subscribe((res)=>{
   this.data=res
 })

  }

}
