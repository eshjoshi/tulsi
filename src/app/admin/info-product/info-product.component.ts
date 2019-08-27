import { Component, OnInit } from '@angular/core';
import { InfoProductService } from '../info-product.service';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.scss']
})
export class InfoProductComponent implements OnInit {
  public infoProduct =[];
  constructor(private infoProductService : InfoProductService) { }

  ngOnInit() {
    this.infoProductService.getInfoProduct()
    .subscribe(data=> this.infoProduct = data);
  }

}
