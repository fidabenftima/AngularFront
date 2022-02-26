import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  basic_url="http://localhost:8082/classe/api/v1/etudiants";
  constructor(private http:HttpClient) { }
  createEtudiant(value:any):Observable<any>{
    return this.http.post(`${this.basic_url}`,value);
  }
  getEtudiantsList():Observable<any>{
    return this.http.get(`${this.basic_url}`);
  }

  deleteEtudiant(id:any):Observable<any>{
    return this.http.delete(`${this.basic_url}/${id}`);
  }
  getEtudiant(id:any):Observable<any>{
    return this.http.get(`${this.basic_url}/${id}`);
  }
  updateEtudiant(id:any,value:any):Observable<any>{
    return this.http.put(`${this.basic_url}/${id}`,value);
  }
}
