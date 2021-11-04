import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterheader',
  templateUrl: './filterheader.component.html',
  styleUrls: ['./filterheader.component.scss']
})
export class FilterheaderComponent implements OnInit {

  constructor() { }
  filterdata={
    type1:"Mobile",
    type2:"Fashion",
    type3:"Home"
  }
  ngOnInit(): void {
  }

}
