import { Component, OnInit } from '@angular/core';
import { ToDos } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: ToDos[] = [];
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  test = "deneme";
  // productResponseModel: ProductResponseModel = {
  //   data: this.products,
  //   massage: '',
  //   success: true,
  // };

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getToDos();
  }

  getToDos() {
    this.httpClient.get<any>(this.apiUrl).subscribe((response) => {
      console.log(response);

      this.products = response;
    });
  }
}
