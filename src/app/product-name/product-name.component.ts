import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-name',
  templateUrl: './product-name.component.html',
  styleUrls: ['./product-name.component.scss']
})
export class ProductNameComponent implements OnChanges {

public productName: string="";

constructor(public activaterouter:ActivatedRoute){
  console.log("activatedrouter:",activaterouter)
  activaterouter.params.subscribe((param:any) =>{
    console.log(param);
    this.productName = param.productName;
  })
}
ngOnChanges( changes: SimpleChanges): void {
  console.log("changes",changes);
}
  
}


