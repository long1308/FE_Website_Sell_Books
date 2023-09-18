import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from 'src/app/interfaces/product';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  //get All
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('http://localhost:8080/api/products');
  }
  //get by id
  getProduct(id: number | string): Observable<Iproduct> {
    return this.http.get<Iproduct>('http://localhost:8080/api/products/' + id);
  }
  updatePatchProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.patch<Iproduct>(
      'http://localhost:8080/api/products/' + product._id,
      product
    );
  }
  updateProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(
      'http://localhost:8080/api/products/' + product._id,
      product
    );
  }
  deleteProduct(id: number | string): Observable<Iproduct> {
    return this.http.delete<Iproduct>(
      'http://localhost:8080/api/products/' + id
    );
  }
  addProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(
      'http://localhost:8080/api/products/',
      product
    );
  }
}
