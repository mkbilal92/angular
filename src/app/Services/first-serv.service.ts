import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstServService {

  constructor(private http:HttpClient) { }

  public postData(obj: any):Observable<any>{
    return this.http.post("http://localhost:3000/myposts",obj);
  }
  public get(id: any):Observable<any>{
    return this.http.get("http://localhost:3000/myposts/"+id);
  }

  public updatedata(id: any, data:any):Observable<any>{
    return this.http.put("http://localhost:3000/myposts/"+id,data);
}
public deldata(id:any):Observable<any>{
  return this.http.delete("http://localhost:3000/myposts/"+id);
}

public getAll():Observable<any>{
  return this.http.get("http://localhost:3000/myposts/");
}

public getById(id:any)
{
  return this.http.get("http://localhost:3000/myposts/"+id)
}
}
