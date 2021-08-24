import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  image: any;
  public allProduct: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.dataService.getProduct().subscribe((res) => {
      this.allProduct = res;
      console.log(this.allProduct)
    })
  }

  onClick(data: any) {
    console.log(data)
  }

}
