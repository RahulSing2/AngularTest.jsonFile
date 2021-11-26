import { getLocaleDateFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IEmployee } from 'src/employee';
@Injectable({
  providedIn: 'root'
})
export class CmpDataService {

  constructor(private http:HttpClient) {}
    getData(){
let url="/assets/Data/Employee.json";
return this.http.get<IEmployee[]>(url);
    }
   }

