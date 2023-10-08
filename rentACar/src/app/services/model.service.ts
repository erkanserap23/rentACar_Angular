import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private apiUrl ='http://localhost:8080/api/';

  constructor(private httpClient:HttpClient) { }

  getAllModel():Observable<Model[]>{
    let newPath=this.apiUrl+"models/getAll";
    return this.httpClient.get<Model[]>(newPath);
  }
}
