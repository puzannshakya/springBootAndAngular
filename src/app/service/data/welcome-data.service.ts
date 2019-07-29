import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';



export class HelloWorldBean{
  constructor(public message:String){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService()
  {
   return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
    //console.log("Execute Hello World Bean Service");
  }

  executeHelloWorldBeanServiceWithPathVariable(name)
  {
   return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`);
   
  }
}
