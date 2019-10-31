import { Component, OnInit } from '@angular/core';
import { Practice } from './Practice';
import { FirstServService } from '../Services/first-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-practice',
  templateUrl: './service-practice.component.html',
  styleUrls: ['./service-practice.component.css']
})
export class ServicePracticeComponent implements OnInit {
  id: any;
  practiceObj: Practice = new Practice();
  dataArray:any[]=[];
total;
  
  constructor(private myServ: FirstServService,private router:Router) { }

  ngOnInit() {
  }

  onClick() {
    this.myServ.postData(this.practiceObj).subscribe(response => {

      this.id = response.id;
      this.practiceObj.name = "";
      this.practiceObj.address = "";
      this.practiceObj.email = "";
      this.practiceObj.price = "";
      

    })

  }

  edit() {
    this.myServ.get(this.id).subscribe(res => {
      this.practiceObj.email = res.email;
    })
  }
  update() {

    this.myServ.updatedata(this.id, this.practiceObj).subscribe(res => {

      this.practiceObj.email = res.email
    })
  }

  delete(value:any) {
    this.id = value;
    this.myServ.deldata(this.id).subscribe(res => {
      
      this.id = res.id
    })
    this.getAll();



  }

  getAll(){
    this.dataArray = [];
   
   this.total = 0;
    
    this.myServ.getAll().subscribe(response=>{
      response.map(d=>{

        this.total = this.total + parseInt(d.price)
        this.dataArray.push({
          "id":d.id,
          'name':d.name?d.name:"no name defined",
          'email':d.email,
          'address':d.address,
          'price':d.price
        })
      })
    })
    console.log("data Array",this.dataArray)
  }

  Onformcomponent(id: any)
  {
    this.router.navigate(['formComp/'+id])
  }
}
