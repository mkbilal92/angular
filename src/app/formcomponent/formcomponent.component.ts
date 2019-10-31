import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstServService } from '../Services/first-serv.service';
import { Practice } from '../service-practice/Practice';
@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {
 
  id : any;
  practiceObj:Practice;
  constructor(private myServ: FirstServService, private activateroute :ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activateroute.snapshot.params['id'];
        console.log(this.id)
        this.getById();
  }

  


getById()
{
  this.myServ.get(this.id).subscribe(res => {
    console.log(res);
    this.practiceObj = res;
}
  )
}

delete()
{
  this.myServ.deldata(this.id).subscribe(res => {
    console.log(res);
    this.practiceObj = res;
}
  )
}

}

