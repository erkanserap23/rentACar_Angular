import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private apiUrl ='http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  getAllModel():Observable<Model[]>{
    let newPath=this.apiUrl+"/models";
    return this.httpClient.get<Model[]>(newPath);
  }

  getModelByBrand(): Observable<Model[]> {
    let url ='http://localhost:3000/models?_expand=brand';
    return this.httpClient.get<Model[]>(url);
  }



}


